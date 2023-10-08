
import { useEffect, useState } from "react";



import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import axios from "axios";
import { UpdateProduct } from "./type";
import { useParams } from "react-router-dom";
import { updateProductSchema } from "./schema";

export const useUpdateProduto = () => {
  const params = useParams<{ id: string }>()
  const [categoryX, setCategoryX] = useState('')

  const {
    setValue,
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateProduct>({
    resolver: zodResolver(updateProductSchema),
    mode: "all",
    criteriaMode: "all",
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/product/${params.id}`)
      .then((res) => {
        setValue('name', res.data.name)
        setValue('price', res.data.price)
        setValue('description', res.data.description)
        setValue('img', res.data.img)
        setValue('promotionalPrice', res.data.promotionalPrice)
        setValue('category', res.data.category._id)
        setValue('avaliable', res.data.avaliable)
        setValue('activePromotion', res.data.activePromotion)
      })
      .catch((err) => { console.log(err) })
      .finally(() => { })
  }, [])


  async function updateProduto(data: any) {
    axios.put(`http://localhost:3000/product/${params.id}`, data)
      .then((res) => { console.log(res.data) })
      .catch((err) => { console.log(err) })
      .finally(() => { })
  }

  return { updateProduto, register, handleSubmit, errors }
}



