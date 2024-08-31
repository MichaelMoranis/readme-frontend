import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppMegaSena } from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Quina } from "./components/Quina/Quina.tsx";
import { LayoutRouter } from "./components/Layout/LayoutRouter.tsx";
import { Lotomania } from "./components/Lotomania/Lotomania.tsx";
import { Lotofacil } from "./components/Lotofacil/Lotofacil.tsx";
import { Timemania } from "./components/Timemania/Timemania.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRouter />, // Usando o Layout como elemento principal
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "megasena",
        element: <AppMegaSena />,
      },
      {
        path: "quina",
        element: <Quina />,
      },
      {
        path: "lotomania",
        element: <Lotomania />,
      },
      {
        path: "lotofacil",
        element: <Lotofacil />,
      },
      {
        path: "timemania",
        element: <Timemania />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
