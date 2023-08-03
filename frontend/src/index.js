import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import AddDream from "./components/AddDream";
import DreamPage from "./components/DreamPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/add",
        element: <AddDream />,
      },
    ],
  },
  {
    path: "/:id",
    element: <DreamPage />,
    loader: async ({ params }) => {
      return fetch(`http://localhost:3001/dreams/${params.id}`);
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
