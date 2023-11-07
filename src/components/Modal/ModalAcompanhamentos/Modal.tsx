/* eslint-disable @typescript-eslint/no-explicit-any */

import { Card } from "@/components/ui/card";
import { formatPrice } from "@/helper/formtPrice";
import { deliveryInstance } from "@/services/deliveryInstance";
import {
  Acompanhamento,
  acompanhamentosSchema,
} from "@/validators/acompanhamento/Acompanhamento";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface IModal {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  acompanhamentos: Array<Acompanhamento> | undefined;
}

export const Modal: React.FC<IModal> = ({
  isOpen,
  setOpen,
  acompanhamentos,
}) => {
  const [sideDishh, setSideDishh] = useState<Array<Acompanhamento>>();
  const [lista, setLista] = useState<Array<string>>([]);
  // const [validaCheck, setValidaCheck] = useState<boolean>();

  const params = useParams<{ id: string }>();

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
      console.log(novoArr);
    } else {
      setLista([...lista, id]);
    }
  };

  // const verifica = (id: string) => {
  //   const existe1 = lista.find((item) => item === id);

  //   if (existe1) {
  //     setValidaCheck(true);
  //   } else {
  //     setValidaCheck(false);
  //   }
  // };

  const addSideDish = () => {
    axios
      .put(`http://localhost:3000/product/${params.id}`, { sideDish: lista })
      .then(() => {
        alert("Acompanhamento atualizando");
        // location.reload()
      });
  };

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
                <InputAcompanhamento
                  lista={lista}
                  setLista={setLista}
                  element={element}
                  handlerListaAcompanhamento={handlerListaAcompanhamento}
                  acompanhamentos={acompanhamentos}
                />
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
interface Prop {
  element: {
    _id: string;
    name: string;
    description: string;
    price: number;
    avaliable: boolean;
  };
  handlerListaAcompanhamento: (id: string) => void;
  acompanhamentos: Array<Acompanhamento> | undefined;
  setLista: React.Dispatch<React.SetStateAction<string[]>>;
  lista: string[];
}

const InputAcompanhamento = ({
  element,
  handlerListaAcompanhamento,
  acompanhamentos,
  setLista,
}: Prop) => {
  useEffect(() => {
    const x = acompanhamentos?.find((ac) => ac._id === element._id);
    if (x) {
      setValidaCheck(true);
      console.log("SE fuder gabriel");
    }

    const k = acompanhamentos?.map((ac) => ac._id);
    if (k) {
      setLista(k);
    }
  }, [acompanhamentos]);

  const [validaCheck, setValidaCheck] = useState<boolean>();

  return (
    <input
      type="checkbox"
      id={element._id}
      checked={validaCheck}
      onChange={(ev) => {
        handlerListaAcompanhamento(ev.currentTarget.id);
        setValidaCheck(!validaCheck);
      }}
    />
  );
};
