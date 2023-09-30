import ToggleLanguage from "../ToggleLanguage/ToggleLanguage";
import ToggleTheme from "../ToggleTheme/ToggleTheme";

export default function Menu() {
  return (
    <>
      <ul>
        <li><a href="/componentes">Componentes</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/CadastroCliente">Cadastro de Cliente</a></li>
        <li><a href="/CadastroProduto">Cadastro de Produto</a></li>
      </ul >

      <div className="flex flex-row gap-2 self-end">
        <ToggleTheme />
        <ToggleLanguage />
      </div>
    </>
  )
}
