import { Link, Outlet } from "react-router-dom";

export default function RootLayoutAdmin() {
  return (
    <>
      <header>
        <Link to="/" className="logo">Delivery BGH</Link>
        <nav>
          <Link to="/">Início</Link>
          <Link to="/produtos">Produtos</Link>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
      <footer>
        Todos os direitos reservados por BGH
      </footer>
    </>
  )
}