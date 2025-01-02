import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";

export const MainRouter = createBrowserRouter([
    {
        path: "/", element: <MainLayout/>,
        children: [
            { index: true, element: <Home /> }
        ]
    }
])