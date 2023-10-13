import { FiMenu } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import TituloPagina from "../Titulo";

export default function Cabecalho() {
  return (
    <div className="flex justify-between items-center">
      <RxAvatar className="text-tmd" />
      <TituloPagina titulo="Titulo Da Pagina" />
      <FiMenu className="text-tmd" />
    </div>
  );
}
