import { Card } from "@/components/ui/card";
import { formatPrice } from "@/helper/formtPrice";
import { deliveryInstance } from "@/services/deliveryInstance";
import {
  Acompanhamento,
  acompanhamentosSchema,
} from "@/validators/acompanhamento/Acompanhamento";
import React, { useEffect, useState } from "react";

interface IModal {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

export const Modal: React.FC<IModal> = ({ isOpen, setOpen }) => {
  const [sideDish, setSideDish] = useState<Array<Acompanhamento>>();

  useEffect(() => {
    deliveryInstance
      .get("/sideDish")
      .then((res) => {
        console.log(res.data);
        const parse = acompanhamentosSchema.array().safeParse(res.data);
        if (parse.success) {
          setSideDish(parse.data);
        } else {
          console.log(parse);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isOpen) {
    return (
      <div>
        <div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white decoration-black p-16 rounded-lg flex flex-col items-center"
          style={{ color: "black" }}
        >
          <h2>Selecione um acompanhamento</h2>

          <Card className="w-full">
            {sideDish?.map((element) => (
              <Card key={element._id} className="p-2">
                <p>{element.name}</p>
                <p>{element.description}</p>
                <p>{formatPrice(element.price)}</p>
              </Card>
            ))}
          </Card>

          <div className="flex gap-2">
            <button
              style={{ padding: "0.7rem", color: "white" }}
              className="rounded bg-blue-400 text-lg"
            >
              Adicionar
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
    return null; // ou apenas <></>
  }
};
