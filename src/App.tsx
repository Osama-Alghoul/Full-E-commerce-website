import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "./App.css";
import { CartProvider } from "./utils/CartContext";
import { FavProvider } from "./utils/FavContext";
import { AuthProvider } from "./utils/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <FavProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </FavProvider>
    </AuthProvider>
  );
}