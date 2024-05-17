import { createBrowserRouter } from "react-router-dom";
import Planets from "./pages/planets";
import App from "./App";
import Error from "./pages/404";
import PlanetDetail from "./pages/planetDetail";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />
    },
    {
      path: "/planets",
      element: <Planets />,
      errorElement: <Error />, 
    },
    {
        path:'/planets/:planetid',
        element: <PlanetDetail />
    }
  ]
  )