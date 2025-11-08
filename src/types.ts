import type React from "react";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  isNew?: boolean;
  sales?: number;
  colors?: string[];
}

export interface Cart {
  id: number;
  userId: number;
  products: { product: Product; count: number }[];
}

export type CartProviderProps = {
  children: React.ReactNode;
};

export type CartContextProps = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  moveAllToCart: ([...items]: CartItem[]) => void;
  cleanCart: () => void;
  cartQuantity: number;
  cartItems: CartItem[];
};

export type FavContextProps = {
  increaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  getItemQuantity: (id: number) => number;
  favItems: CartItem[];
};

export type CartItem = {
  id: number;
  quantity: number;
};

export interface apiProps {
  products: Product[];
  loading: boolean;
}

export interface AuthContextProps {
  userData: { username: string };
  getUserData: ({ data }: { data: { username: string } }) => void;
  isLoggedIn: boolean;
  logout: () => void;
}
