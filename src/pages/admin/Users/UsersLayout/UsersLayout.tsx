import { Link, Outlet, useLocation } from "react-router-dom"

export default function UsersLayout(){
    const { pathname } = useLocation()

    return (
      <main>
        <h1 className="text-5xl">Lista Produtos</h1>
        <div className="tabs flex flrex-row gap-2">
          <Link to="/user" className={`tab ${pathname === "/user" ? "active" : ""}`}>Todos Users</Link>
          
        </div>
        <div className="flex justify-center">
        <Outlet />
        </div>
      </main>
    )
}