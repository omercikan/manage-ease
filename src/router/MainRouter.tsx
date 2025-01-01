import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

export const MainRouter = createBrowserRouter([
    {
        path: "/", element: <MainLayout/>,
        children: [
        ]
    }
])