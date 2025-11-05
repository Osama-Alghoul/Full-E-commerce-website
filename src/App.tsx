import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "./App.css";
import { CartProvider } from "./utils/CartContext";
import { FavProvider } from "./utils/FavContext";

export default function App() {
  return (
    <FavProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </FavProvider>
  );
}
