import Layout from "./layout.jsx"
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "./pages/home.jsx";
import ErrorPage from "./error-page";
import Apropos from "./pages/a_propos.jsx";
import ImagePage from "./pages/image_page.jsx";
import Profile from "./pages/profile.jsx"
export const router = createBrowserRouter([
    {
     
        element: <Layout />,
        children:[
            {
                path: "/",
              
                element: <Root />,
                
              },
              {
                 path: "contacts/:contactId",
                element: <Apropos />,
              },
              {
                path: "*",
                element: <ErrorPage />,
              },
              {
                path: "/image/:id",
                element: <ImagePage />,
              }

        ],
        
      },
    
  ]);


  