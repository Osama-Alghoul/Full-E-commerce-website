import type React from "react";

/**
 * Interface for a single product review.
 */
interface Review {
  rating: number;
  comment: string;
  date: string; // ISO 8601 date string
  reviewerName: string;
  reviewerEmail: string;
}

/**
 * Interface for the dimensions of the product.
 */
interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

/**
 * Interface for product metadata.
 */
interface Meta {
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
  barcode: string;
  qrCode: string;
}

/**
 * Main interface for the Product data structure.
 */
export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[]; // Array of strings for product tags
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[]; // Array of Review objects
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[]; // Array of image URLs (strings)
  thumbnail: string; // URL string for the thumbnail
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

export interface AuthContextProps {
  userData: { username: string };
  getUserData: ({ data }: { data: { username: string } }) => void;
  isLoggedIn: boolean;
  logout: () => void;
}

export interface FilterState {
    searchTerm: string;
    category: string;
    minPrice: string;
    maxPrice: string;
}

export const ALL_CATEGORIES: string[] = [
    "beauty", "fragrances", "furniture", "groceries", "home-decoration", 
    "kitchen-accessories", "laptops", "mens-shirts", "mens-shoes", 
    "mens-watches", "mobile-accessories", "motorcycle", "skin-care", 
    "smartphones", "sports-accessories", "sunglasses", "tablets", 
    "tops", "vehicle", "womens-bags", "womens-dresses", 
    "womens-jewellery", "womens-shoes", "womens-watches"
];