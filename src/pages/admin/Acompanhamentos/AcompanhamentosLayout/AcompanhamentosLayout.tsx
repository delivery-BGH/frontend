import { Link, Outlet, useLocation } from "react-router-dom";

export default function AcompanhamentosLayout() {
  const { pathname } = useLocation();

  return (
    <main>
      <h1 className="text-5xl">Lista de Acompanhamentos</h1>
      <div className="tabs flex flrex-row gap-2">
        <Link
          to="/sideDish"
          className={`tab ${pathname === "/sideDish" ? "active" : ""}`}
        >
          Todos Acompanhamentos
        </Link>
        <Link
          to="/sideDish/new"
          className={`tab ${pathname === "/sideDish/new" ? "active" : ""}`}
        >
          Novo Acompanhamento
        </Link>
      </div>
      <div className="flex justify-center">
        <Outlet />
      </div>
    </main>
  );
}
