/* eslint-disable @typescript-eslint/no-explicit-any */
import { createUserFormSchema } from "./shcema";
import { createUserFormData } from "./types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useState } from "react";

export const useCreateProduto = () => {
  const [status, setStatus] = useState(false)
  const [loading, setLoading] = useState(false)
  const [erroApi, setErroApi] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserFormData, { AtivoNoCardapio: boolean, prom: boolean }>({
    resolver: zodResolver(createUserFormSchema),
    mode: "all",
    criteriaMode: "all",
  });


  const createProduto = (data: any, card: boolean, prom: boolean) => {
    setLoading(true)
    fetch('http://localhost:3000/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...data, card, prom })
    })
      .then((res) => {
        setStatus(res.status === 201 ? true : false);
      })
      .catch((err) => {
        setErroApi(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return { createProduto, register, handleSubmit, errors, loading, erroApi, status }
}
