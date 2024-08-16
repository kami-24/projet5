import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from "./pages/home";
import Apropos from "./pages/a_propos";
import ErrorPage from "./error-page";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import  {router} from "./router.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);