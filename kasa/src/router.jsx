import Layout from "./layout.jsx";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home.jsx";
import ErrorPage from "./error-page.jsx";
import Apropos from "./pages/a_propos.jsx";
import Logement from "./pages/logement.jsx";
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",

        element: <HomePage />,
      },
      {
        path: "a-propos",
        element: <Apropos />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/error",
        element: <ErrorPage />,
      },
      {
        // path: "/image/:id",
        path: "/logement/:id",
        element: <Logement />,
      },
    ],
  },
]);
