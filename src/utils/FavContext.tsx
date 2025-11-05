import { createContext, useContext } from "react";
import type { CartProviderProps, FavContextProps, CartItem } from "../types";
import useLocalStorage from "../hooks/useLocalStorage";

const FavContext = createContext({} as FavContextProps);

export function useFavContext() {
  return useContext(FavContext);
}

export function FavProvider({ children }: CartProviderProps) {
  const [list, setList] = useLocalStorage<CartItem[]>("Favorites" ,[]);

  function increaseCartQuantity(id: number) {
    setList((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setList((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }

  function getItemQuantity(id: number) {
    return list.find((item) => item.id === id)?.quantity || 0;
  }

  return (
    <FavContext.Provider
      value={{
        increaseCartQuantity,
        removeFromCart,
        getItemQuantity,
        favItems: list,
      }}
    >
      {children}
    </FavContext.Provider>
  );
}
