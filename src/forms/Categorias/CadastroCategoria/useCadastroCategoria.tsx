/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { createCategoryForm } from "./types";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import axios from "axios";

import { createCategoryFormSchema } from "./schema";

export function useCreateCategory() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createCategoryForm>({
    resolver: zodResolver(createCategoryFormSchema),
    mode: "all",
    criteriaMode: "all",
  });

  async function CreateCategory(data: any) {
    axios
      .post(`http://localhost:3000/category`, { ...data })
      .then((res) => {
        console.log(res.status);
        alert("Categoria Cadastrada!");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally();
  }

  return { register, handleSubmit, errors, CreateCategory };
}
