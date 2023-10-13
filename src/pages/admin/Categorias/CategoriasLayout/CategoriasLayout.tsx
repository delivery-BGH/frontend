import { Link, Outlet, useLocation } from "react-router-dom"

export default function CategoriasLayout(){
    const { pathname } = useLocation()

    return (
      <main>
        <h1 className="text-5xl">Lista Produtos</h1>
        <div className="tabs flex flrex-row gap-2">
          <Link to="/category" className={`tab ${pathname === "/category" ? "active" : ""}`}>Todas categorias</Link>
          <Link to="/category/new" className={`tab ${pathname === "/category/new" ? "active" : ""}`}>Nova Categoria</Link>
        </div>
        <div className="flex justify-center">
        <Outlet />
        </div>
      </main>
    )
}