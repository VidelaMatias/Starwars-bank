import ReactDOM from "react-dom/client";
import { makeServer } from "./server";
import { RouterProvider,  } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from "react-query";
import {router} from './routerConfig'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);

makeServer();
