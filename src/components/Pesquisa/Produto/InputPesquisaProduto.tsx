import { Input } from "../../ui/input";
import PesquisaProduto from "./PesquisaProduto";

export function InputPesquisaProduto(){
   const {valuePesquisa, setValuePesquisa, submitPesquisa} = PesquisaProduto()
    return (
        <>
        <div className="flex flex-row gap-2">
        <Input type="text" placeholder="Pesquise por nome" className="w-1/3" value={valuePesquisa} onChange={(ev) => setValuePesquisa(ev.target.value)}/>
        <button
        onClick={submitPesquisa}
        className="bg-blue-500 rounded-lg text-lg p-1 hover:bg-slate-700"
      >Pesquisar</button>
      </div>
        </>
    )
}