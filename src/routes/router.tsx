/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { UpdateCategory } from "@/pages/admin/Categorias/UpdateCategory/UpdateCategory";
import UsersLayout from "@/pages/admin/Users/UsersLayout/UsersLayout";
import ListUser from "@/pages/admin/Users/ListUser/ListUser";
import { UpdateUser } from "@/pages/admin/Users/UpdateUsers/UpdateUsers";
import AcompanhamentosLayout from "@/pages/admin/Acompanhamentos/AcompanhamentosLayout/AcompanhamentosLayout";
import { CadastroAcompanhamentos } from "@/pages/admin/Acompanhamentos/CadastroAcompanhamento/CadastroAcompanhamentos";

import { UpdateAcompanhamentos } from "@/pages/admin/Acompanhamentos/UpdateAcompanhamentos/UpdateAcompanhamentos";
import ListAcompanhamentos from "@/pages/admin/Acompanhamentos/ListAcompanhamentos/ListAcompanhamentos";
import { PagHome } from "../pages/Home/pagHome/pagHome";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/home",
    element: <PagHome/>
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
          { path: ":id", element: <UpdateCategory /> },
        ],
      },
      {
        path: "sideDish",
        element: <AcompanhamentosLayout />,
        children: [
          { index: true, element: <ListAcompanhamentos /> },
          { path: "new", element: <CadastroAcompanhamentos /> },
          { path: ":id", element: <UpdateAcompanhamentos /> },
        ],
      },
      {
        path: "user",
        element: <UsersLayout />,
        children: [
          { index: true, element: <ListUser /> },
          { path: ":id", element: <UpdateUser /> },
        ],
      },
    ],
  },
  {
    path: "/cadastroCliente",
    element: <CadastroCliente />,
  },


]);
