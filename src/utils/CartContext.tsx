import { createContext, useContext } from "react";
import type { CartProviderProps, CartContextProps, CartItem } from "../types";
import useLocalStorage from "../hooks/useLocalStorage";

const CartContext = createContext({} as CartContextProps);

export function useCartContext() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useLocalStorage<CartItem[]>("shopping cart" ,[]);

  const cartQuantity = cart.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function getItemQuantity(id: number) {
    return cart.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCart((currentItems) => {
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
    setCart((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }

  function decreaseCartQuantity(id: number) {
    setCart((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function moveAllToCart([...items]: CartItem[]) {
    setCart(items);
  }

  return (
    <CartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        moveAllToCart,
        cartQuantity,
        cartItems: cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
