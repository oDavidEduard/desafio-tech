import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Visualizer from "./Visualizer";
import Register from "./Register";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/",
    element: <Dashboard />,
  },

  {
    path: "/visualizer",
    element: <Visualizer />
  },

  {
    path: "/register",
    element: <Register />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);