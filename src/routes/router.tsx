import { createBrowserRouter } from "react-router-dom";
<<<<<<< Updated upstream
import Menu from "../components/Menu";

import CadastroCliente from "@/pages/CadastroCliente";
import { CadastroProdutos } from "@/pages/admin/CadastroProduto";
=======


import CadastroCliente from "@/pages/CadastroCliente";

>>>>>>> Stashed changes
import RootLayoutAdmin from "@/pages/admin/RootLayoutAdmin";
import { Home } from "lucide-react";
import ProdutosLayout from "@/pages/admin/ProdutosLayout";
import ListProduto from "@/pages/admin/ListProduto";
import ShowProduto from "@/pages/admin/ShowProduto";
import UpdateProduto from "@/pages/admin/Update";

export const router = createBrowserRouter([{
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
        { path: ":id", element: <ShowProduto /> },
        { path: ":id/update", element: <UpdateProduto /> }
      ]
    }
  ]
},
{
  path: "/cadastroCliente",
  element: <CadastroCliente />
}

])