import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Root/Root.jsx";
import Home from "./Pages/Home/Home.jsx";
import Menu from "./Pages/Menu/Menu.jsx";
import { HelmetProvider } from "react-helmet-async";
import OrderFood from "./Pages/OrderFood/OrderFood.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Login from "./Firebase/Login/Login.jsx";
import SignUp from "./Firebase/SignUp/SignUp.jsx";
import AddMenu from "./Pages/AddMenu/AddMenu.jsx";
import AuthProvider from "./Firebase/AuthProvider/AuthProvider.jsx";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DashBoard from "./Layout/DashBoard.jsx";
import Cart from "./Pages/DashBoard/Cart/Cart.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order",
        element: <OrderFood />,
        loader: async () => {
          const response = await fetch("menu.json");
          if (!response.ok) throw new Response("Not Found", { status: 404 });
          return response.json();
        },
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/addMenu",
        element: <AddMenu />,
      },
      {
        path: "/shoppingCart",
        element: <ShoppingCart />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/dashBoard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className="max-w-7xl mx-auto">
            <RouterProvider router={router} />,
          </div>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
