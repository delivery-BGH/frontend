import { Acompanhamento } from "@/validators/acompanhamento/Acompanhamento";
import { useEffect, useState } from "react";

interface Props {
  element: {
    _id: string;
    name: string;
    price: number;
    description: string;
    avaliable: boolean;
  };
  acompanhamentos: Array<Acompanhamento> | undefined;
  handlerListaAcompanhamento: (id: string) => void;
  setLista: React.Dispatch<React.SetStateAction<string[]>>;
  lista: Array<string>;

}
export default function InputModal({
  element,
  acompanhamentos,
  handlerListaAcompanhamento,
  lista,
  setLista
}: Props) {
  const [checked, setChecked] = useState<boolean>();
 useEffect(() => {
    console.log("element",element.name)
    //console.log("acompanhamentos",acompanhamentos)
    let idd = acompanhamentos?.find((item)=> item._id === element._id)
    if(idd){
        setChecked(true)
    }
        console.log("kuiuyhb",idd)
        const fodasi = acompanhamentos?.map((it) => {
            return  it._id
        })
        if(fodasi){setLista(fodasi)}
        
        
    

 }, [acompanhamentos])
  return (
    <input
      type="checkbox"
      checked={checked}
      id={element._id}
      onChange={(ev) => {
        setChecked(!checked)
        handlerListaAcompanhamento(ev.currentTarget.id);
        console.log(ev.currentTarget.checked);
      }}
    />
  );
}
