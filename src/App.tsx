import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "./App.css";
import { CartProvider } from "./utils/CartContext";

export default function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}
