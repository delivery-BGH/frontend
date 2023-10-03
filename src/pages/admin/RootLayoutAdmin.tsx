import Menu from "@/components/Menu";
import { Link, Outlet } from "react-router-dom";

export default function RootLayoutAdmin() {
  return (
    <div className="p-6">
      <header className="flex flex-row w-full justify-between">
        <div className="border-2 w-full flex flex-row justify-between">
          <Link to="/" className="logo">Delivery BGH</Link>
          <nav className="flex flex-row gap-2">
            <Link to="/">Início</Link>
            <Link to="/produtos">Produtos</Link>
          </nav>
          <Menu />
        </div>
      </header>
      <div>
        <Outlet />
      </div>
      <footer className="fixed bottom-0">
        Todos os direitos reservados por BGH
      </footer>
    </div>
  )
}