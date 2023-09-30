import { createBrowserRouter } from "react-router-dom";
import Menu from "../components/Menu";
import { CadastroProdutos } from "@/pages/CadastroProduto";
import CadastroCliente from "@/pages/CadastroCliente";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
  },
  {
    path: "/cadastroProduto",
    element: <CadastroProdutos/>
  },
  {
    path: "/CadastroCliente",
    element: <CadastroCliente />
  }
]);