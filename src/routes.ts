import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import Login from "./components/pages/log-in/Login";
import SignUp from "./components/pages/sign-up/signUp";
import Cart from "./components/pages/cart/cart";
import CheckOut from "./components/pages/checkout/checkout";
import ProductDetails from "./components/pages/product-details/ProductDetails";
import About from "./components/pages/about/about";
import Contact from "./components/pages/contact/contact";
import NotFound from "./components/pages/not-found/not-found";
import WishList from "./components/pages/whislist/whishlist";

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
        path: "products",
        children: [{ path: ":id", Component: ProductDetails }],
      },
      {
        path: "about",
        children: [{ index: true, Component: About }],
      },
      {
        path: "contact",
        children: [{ index: true, Component: Contact }],
      },
      {
        path: "wishlist",
        children: [{ index: true, Component: WishList }],
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

export default router;
