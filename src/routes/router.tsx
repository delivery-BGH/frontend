import { createBrowserRouter } from "react-router-dom";
import Menu from "../components/Menu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
  },
]);