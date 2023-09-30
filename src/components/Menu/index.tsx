import ToggleLanguage from "../ToggleLanguage/ToggleLanguage";
import ToggleTheme from "../ToggleTheme/ToggleTheme";

export default function Menu() {
  return (
    <>
      <ul>
        <li><a href="/cadastroProduto">Cadastro Produto</a></li>
        <li><a href="/CadastroCliente">Cadastro Cliente</a></li>
      </ul >

      <div className="flex flex-row gap-2 self-end">
        <ToggleTheme />
        <ToggleLanguage />
      </div>
    </>
  )
}
