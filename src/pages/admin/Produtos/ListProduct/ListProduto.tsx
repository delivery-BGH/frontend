import { InputPesquisaProduto } from "@/components/Pesquisa/Produto/InputPesquisaProduto";
import TableProdutos from "@/components/Table/TableProducts";

export default function ListProduto() {
  return (
    <div className="m-3">
    <div className="ml-5">
      <InputPesquisaProduto />
    </div>
    <div className="p-4">
      <TableProdutos />
    </div>
    </div>
  );
}
