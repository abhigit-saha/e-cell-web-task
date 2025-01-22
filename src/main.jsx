import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Grid from "./components/Grid.jsx";
import Second from "./Second.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Second />,
  },
  {
    path: "/grid",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
