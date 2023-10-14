import { Link, Outlet, useLocation } from "react-router-dom"

export default function ProdutosLayout(){
    const { pathname } = useLocation()

    return (
      <main>
        <h1 className="text-5xl">Lista Produtos</h1>
        <div className="tabs flex flrex-row gap-2">
          <Link to="/produtos" className={`tab ${pathname === "/produtos" ? "active" : ""}`}>Todos Produtos</Link>
          <Link to="/produtos/new" className={`tab ${pathname === "/produtos/new" ? "active" : ""}`}>Novo Produto</Link>
        </div>
        <div className="flex justify-center">
        <Outlet />
        </div>
      </main>
    )
}