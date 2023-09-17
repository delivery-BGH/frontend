import { createBrowserRouter } from "react-router-dom";
import TodosOsComponentes from "./pages/TodosOsComponentes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div><a href="/componentes">Componentes</a></div>,
  },
  {
    path: "/componentes",
    element: <TodosOsComponentes />,
  }
]);