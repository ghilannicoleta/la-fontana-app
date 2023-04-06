import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./routes/Error-page";
import MenuPage from "./routes/MenuPage";
import ShopPage from "./routes/ShopPage";
import RestaurantsPage from "./routes/RestaurantsPage";
import DeliveryPage from "./routes/DeliveryPage";
import LoginPage from "./routes/LoginPage";
import ContactsPage from "./routes/ContactsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/menu",
    element: <MenuPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/restaurants",
    element: <RestaurantsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/delivery",
    element: <DeliveryPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contacts",
    element: <ContactsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
