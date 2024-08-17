import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import React, { lazy, Suspense } from "react";
import Loader from "../components/Loader/Loader.jsx";
// Lazy loading the components
const Home = lazy(() => import("../pages/Home"));
const Cart = lazy(() => import("../pages/Cart"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element:<Home />,
      },
      {
        path: "cart/",
        element: (
          <Suspense fallback={<Loader />}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);
