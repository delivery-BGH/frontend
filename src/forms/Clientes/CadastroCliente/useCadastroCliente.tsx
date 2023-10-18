/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { CadastroCliente } from "./types";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { cadastroClienteSchema } from "./schema";

export const useCadastroCliente = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CadastroCliente>({
    resolver: zodResolver(cadastroClienteSchema),
    mode: "all",
    criteriaMode: "all",
  });

  async function handleFormSubmit(data: any) {
    const response = await fetch("http://localhost:3000/clientes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data }),
    });
    console.log(response);
  }

  return { register, handleSubmit, handleFormSubmit, errors };
};
