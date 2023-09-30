import { createBrowserRouter } from "react-router-dom";
import TodosOsComponentes from "../pages/TodosOsComponentes";
import Login from "../pages/Login";
import CadastroCliente from "../pages/CadastroCliente";
import CadastroProduto from "../pages/CadastroProduto";
import Menu from "../components/Menu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
  },
  {
    path: "/componentes",
    element: <TodosOsComponentes />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastroCliente",
    element: <CadastroCliente />,
  },
  {
    path: "/CadastroProduto",
    element: <CadastroProduto />,
  }
]);