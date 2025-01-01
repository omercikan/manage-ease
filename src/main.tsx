import "./output.css";
import "./index.css";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./router/MainRouter.tsx";
import { Provider } from "react-redux";
import { GlobalStore } from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={GlobalStore}>
    <RouterProvider router={MainRouter} />
  </Provider>
);
