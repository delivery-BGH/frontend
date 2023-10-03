import { Link, Outlet, useLocation } from "react-router-dom"

export default function ProdutosLayout(){
    const { pathname } = useLocation()

    return (
      <main>
        <h1>Lista Produtos</h1>
        <div className="tabs">
          <Link to="/produtos" className={`tab ${pathname === "/produtos" ? "active" : ""}`}>Todos Produtos</Link>
          <Link to="/produtos/new" className={`tab ${pathname === "/produtos/new" ? "active" : ""}`}>Novo Produto</Link>
        </div>
        <Outlet />
      </main>
    )
}