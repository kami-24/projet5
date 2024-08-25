import Layout from "./layout.jsx";
import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/home.jsx";
import ErrorPage from "./error-page.jsx";
import Apropos from "./pages/a_propos.jsx";
import Logement from "./pages/logement.jsx";
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",

        element: <Root />,
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
        path: "/image/:id",
        element: <Logement />,
      },
    ],
  },
]);
