/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { createUserFormSchema } from "./shcema";

import { createUserFormData } from "./types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";








 


export const useCreateProduto = () =>{
    const [status, setStatus] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<createUserFormData>({
        resolver: zodResolver(createUserFormSchema),
        mode: "all",
        criteriaMode: "all",
      });

    async function createProduto(data: any) {
      try {
        
       
        const x = { ...data }
        const response = await fetch('http://localhost:3000/product', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ ...data,})
        })
      
        setStatus(response.status === 201 ? true : false)
      
      
        console.log("enviado para o banco: ", x)
      }
        catch (error) {
         console.log(error)
        }
      }
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return {createProduto, register, handleSubmit, errors, status}
 }



/*export const getCategorias = async () => {
  const response = await fetch('http://localhost:3000/category')
  const countries = await response.json()
  setCategorias(countries)
}*/