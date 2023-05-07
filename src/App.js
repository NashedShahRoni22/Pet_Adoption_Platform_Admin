import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./layout/Main";
import AllPost from "./pages/AllPost";
import AllOrders from "./pages/AllOrders";
import AllReviews from "./pages/AllReviews";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: ([
      {
        path:"/",
        element:<AllPost/>,
      },
      {
        path:"/allorders",
        element:<AllOrders/>,
      },
      {
        path:"/allreviews",
        element:<AllReviews/>,
      },
    ])
  },
]);

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
