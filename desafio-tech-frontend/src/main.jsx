import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Modal from "react-modal";

import "./index.css";
import Layout from "./components/Layout";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Visualizer from "./Visualizer";
import Register from "./Register";
import Form from "./Form";

Modal.setAppElement("#root");

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index:true,
        element: <Dashboard />
      },
      {
        path: "/visualizer",
        element: <Visualizer />,
      },
      {
        path: "recortes/novo",
        element: <Form/>,
      },
      {
        path: "recortes/editar/:id",
        element: <Form />,
      },
    ],
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