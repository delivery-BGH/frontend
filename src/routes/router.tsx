import { createBrowserRouter } from "react-router-dom";
import CadastroCliente from "@/pages/CadastroCliente";
import RootLayoutAdmin from "@/pages/admin/RootLayoutAdmin";
import { Home } from "lucide-react";
import ProdutosLayout from "@/pages/admin/ProdutosLayout";
import ListProduto from "@/pages/admin/ListProduto";
import CadastroProdutos from "@/pages/admin/CadastroProduto/CadastroProduto";
import { UpdateProduto } from "@/pages/admin/Update";
import Login from "@/pages/login/Login";

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: "/",
    element: <RootLayoutAdmin />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "produtos",
        element: <ProdutosLayout />,
        children: [
          { index: true, element: <ListProduto /> },
          { path: "new", element: <CadastroProdutos /> },
          { path: ":id", element: <UpdateProduto /> }
        ]
      }
    ]
  },
  {
    path: "/cadastroCliente",
    element: <CadastroCliente />
  }
])