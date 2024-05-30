import { createBrowserRouter } from "react-router-dom";
import Planets from "./components/planets";
import Error from "./pages/404";
import PlanetDetail from "./pages/planetDetail";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Planets />,
      errorElement: <Error />
    },
    {
        path:'/planets/:planetid',
        element: <PlanetDetail />
    }
  ]
  )