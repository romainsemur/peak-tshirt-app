import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";
import { FilterProvider } from "core/contexts";
import { QueryClientProvider, QueryClient } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TshirtPage from "TshirtPage";

import HomePage from "../HomePage";
import theme from "./theme";
import Layout from "../Layout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3 * 60 * 1000,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "tshirts/:tshirtId",
        element: <TshirtPage />,
      },
    ],
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <FilterProvider>
          <CssBaseline />
          <RouterProvider router={router} />
        </FilterProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
