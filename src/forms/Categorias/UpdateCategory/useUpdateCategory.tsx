/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { updateCategoryForm } from "./types";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { updateCategoryFormSchema } from "./schema";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export function useUpdateCategory() {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<updateCategoryForm>({
    resolver: zodResolver(updateCategoryFormSchema),
    mode: "all",
    criteriaMode: "all",
  });

  const navigate = useNavigate();

  const params = useParams<{ id: string }>();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/category/${params.id}`)
      .then((res) => {
        setValue("name", res.data.name);
        setValue("description", res.data.description);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateCategory = async (data: any) => {
    axios
      .put(`http://localhost:3000/category/${params.id}`, data)
      .then((res) => {
        alert("Categoria atualizada!");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCategory = (data: any) => {
    const confirma = confirm("Deseja excluir essa categoria?");
    if (confirma) {
      axios
        .delete(`http://localhost:3000/category/${params.id}`, data)
        .then((res) => {
          alert("Categoria excluida!");
          console.log(res.data);
          navigate("/category");
        });
    }
  };

  return { register, handleSubmit, errors, updateCategory, deleteCategory };
}
