import { createBrowserRouter } from "react-router-dom"; 
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import Login from "./components/pages/log-in/Login";
import SignUp from "./components/pages/sign-up/signUp";
import Cart from "./components/pages/cart/cart";
import CheckOut from "./components/pages/checkout/checkout";
import ProductDetails from "./components/pages/product-details/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "auth",
        children: [
          { path: "login", Component: Login },
          { path: "register", Component: SignUp },
        ],
      },
      {
        path: "cart",
        children: [
          { index: true, Component: Cart },
          { path: "checkout", Component: CheckOut },
        ],
      },
      {
        path: "gaming",
        children: [{ path: "product-name", Component: ProductDetails }],
      },
    ],
  },
]);

export default router;
