/* eslint-disable @typescript-eslint/no-explicit-any */
import { createUserFormSchema } from "./shcema";
import { createUserFormData } from "./types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

export const useCreateProduto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserFormData, { AtivoNoCardapio: boolean, prom: boolean }>({
    resolver: zodResolver(createUserFormSchema),
    mode: "all",
    criteriaMode: "all",
  });


  async function createProduto(data: any, card: boolean, prom: boolean) {
    await fetch('http://localhost:3000/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...data, card, prom })
    })
  }

  return { createProduto, register, handleSubmit, errors }
}
