import { createBrowserRouter } from "react-router-dom";
import CadastroCliente from "@/pages/CadastroCliente";
import RootLayoutAdmin from "@/pages/admin/RootLayoutAdmin";
import { Home } from "lucide-react";

import Login from "@/pages/login/Login";

import ProdutosLayout from "@/pages/admin/Produtos/ProdutosLayout/ProdutosLayout";
import ListProduto from "@/pages/admin/Produtos/ListProduct/ListProduto";
import CadastroProdutos from "@/pages/admin/Produtos/CadastroProduto/CadastroProduto";
import { UpdateProduto } from "@/pages/admin/Produtos/UpdateProdutos/Update";
import CategoriasLayout from "@/pages/admin/Categorias/CategoriasLayout/CategoriasLayout";
import { ListCategory } from "@/pages/admin/Categorias/ListCategory/ListCategory";
import { CadastroCategorias } from "@/pages/admin/Categorias/CadastroCategoria/CadastroCategoria";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
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
          { path: ":id", element: <UpdateProduto /> },
        ],
      },
      {
        path: "category",
        element: <CategoriasLayout />,
        children: [
          { index: true, element: <ListCategory /> },
          { path: "new", element: <CadastroCategorias /> },
        ],
      },
    ],
  },
  {
    path: "/cadastroCliente",
    element: <CadastroCliente />,
  },
]);
