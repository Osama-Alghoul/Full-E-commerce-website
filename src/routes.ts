// routes.ts (The Final Fix)
import { createBrowserRouter } from "react-router-dom"; // Use 'react-router-dom'
import Layout from "../components/Layout"; // Import the new Layout
import HomePage from "../components/HomePage";
import Login from "../components/pages/log-in/Login";
import SignUp from "../components/pages/sign-up/signUp";

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
    ],
  },
]);

export default router;