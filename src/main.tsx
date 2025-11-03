import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CartProvider } from "./utils/CartContext.js";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);
