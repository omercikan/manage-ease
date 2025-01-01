import "./output.css";
import "./index.css";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./router/MainRouter.tsx";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={MainRouter} />
);
