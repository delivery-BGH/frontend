/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { createProductFormSchema } from "./shcema";
import { createProductForm } from "./types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { deliveryInstance } from "@/services/deliveryInstance";

export const useCreateProduto = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createProductForm>({
    resolver: zodResolver(createProductFormSchema),
    mode: "all",
    criteriaMode: "all",
  });

  async function createProduto(data: any, activePromotion: boolean, avaliable: boolean, ) {
    setLoading(true);
    deliveryInstance.post('/product', { ...data,  activePromotion, avaliable })
      .then((res) => {
        setStatus(res.status === 201 ? true : false)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return { createProduto, register, handleSubmit, errors, status, loading }
}



