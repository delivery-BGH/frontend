/* eslint-disable @typescript-eslint/no-explicit-any */

import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useUpdateProduto } from "@/forms/UpdateProduto/useUpdateProduto";
import { formatPrice } from "@/helper/formtPrice";
import { deliveryInstance } from "@/services/deliveryInstance";
import {
  Acompanhamento,
  acompanhamentosSchema,
} from "@/validators/acompanhamento/Acompanhamento";
import { Produto } from "@/validators/produto/Produto";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


interface IModal {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

export const Modal: React.FC<IModal> = ({ isOpen, setOpen }) => {
  const [sideDishh, setSideDishh] = useState<Array<Acompanhamento>>();
  const [lista, setLista] = useState<Array<string>>([])
  const [produto, setProduto] = useState<Produto>()
  const [valorCheck, setValorCheck] = useState<boolean>(false)
  const params = useParams<{ id: string }>();
 const navigate = useNavigate()
  useEffect(() => {
    deliveryInstance
        .get("/sideDish")
        .then((res) => {
            const parse = acompanhamentosSchema.array().safeParse(res.data);
            if (parse.success) {
                setSideDishh(parse.data);
            } else {
                console.log(parse);
            }
        })
        .catch((err) => {
            console.log(err);
        });

    deliveryInstance
        .get(`/product/${params.id}`)
        .then((res) => {
            setProduto(res.data.sideDish);
        })
        .catch((err) => {
            console.log(err);
        });
}, []);

  /*const handler = (id: string) => {
    console.log("[Lista] - ", lista);
    console.log("[ID] - ", id);

    const existe = lista.find((element) => element === id)
    console.log(existe)
      if (existe) {
      console.log("Existe")
    } else {
      console.log("Nao existe")
      // setLista()
    }
  } */

  const handlerListaAcompanhamento = (id: string) => {
    const existe = lista.find((item) => item === id);

    console.log("[Existe] - ", existe);

    if (existe) {
      const novoArr = lista.filter((item: string) => item != id);
      setLista(novoArr);
      console.log(novoArr)
    } else {
      setLista([...lista, id]);
    }
  };



 

  const addSideDish = () => {
    axios.put(`http://localhost:3000/product/${params.id}`, {sideDish: lista})
    .then((res) => {
      alert("Acompanhamento atualizando")
      navigate(`/produtos/`)
    })
   
  }

  if (isOpen) {
    return (
      <div>
        <div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white decoration-black p-16 rounded-lg flex flex-col items-center"
          style={{ color: "black" }}
        >
          <h2>Selecione um acompanhamento</h2>

          <Card className="w-full">
            {sideDishh?.map((element) => (
              <Card key={element._id} className="flex items-center gap-2 p-2">
                <input type="checkbox" id={element._id}  value={valorCheck} onClick={(ev) => {
                  handlerListaAcompanhamento(ev.currentTarget.id)
                  console.log(ev.currentTarget.checked); }} /> 
                <div>
                  <p>{element.name}</p>
                  <p>{element.description}</p>
                  <p>{formatPrice(element.price)}</p>
                </div>
              </Card>
            ))}
          </Card>

          <div className="flex gap-2">
            <button
             onClick={addSideDish}
              style={{ padding: "0.7rem", color: "white" }}
              className="rounded bg-blue-400 text-lg"
            >
              Salvar
            </button>
            <button
              style={{ padding: "0.7rem", color: "white" }}
              className="rounded bg-red-600 text-lg"
              onClick={() => setOpen(!isOpen)}
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return null; 
  }
};
