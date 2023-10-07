/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { createProductFormSchema } from "./shcema";

import { createProductForm } from "./types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import axios from "axios";

export const useCreateProduto = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createProductForm>({
    resolver: zodResolver(createProductFormSchema),
    mode: "all",
    criteriaMode: "all",
  });

  async function createProduto(data: any, card: boolean, prom: boolean) {
    setLoading(true)
    const x = { ...data, card, prom }
    axios.post('http://localhost:3000/product', { ...data, avaliable: card, activePromotion: prom })
      .then((res) => {
        setStatus(res.status === 201 ? true : false)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
    // const response = await fetch('http://localhost:3000/product', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ ...data, })
    // })



    console.log("enviado para o banco: ", x)

  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return { createProduto, register, handleSubmit, errors, status, loading }
}



/*export const getCategorias = async () => {
  const response = await fetch('http://localhost:3000/category')
  const countries = await response.json()
  setCategorias(countries)
}*/