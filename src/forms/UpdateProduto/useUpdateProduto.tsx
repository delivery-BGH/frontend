import { useEffect } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { updateProductSchema } from "./schema";
import { UpdateProduct } from "./types";
// import { UpdateProduct } from "./type";

export const useUpdateProduto = () => {
  const params = useParams<{ id: string }>();
  //const [categoryX, setCategoryX] = useState('')
  const navigate = useNavigate();

  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateProduct>({
    resolver: zodResolver(updateProductSchema),
    mode: "all",
    criteriaMode: "all",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/product/${params.id}`)
      .then((res) => {
        setValue("name", res.data.name);
        setValue("price", res.data.price);
        setValue("description", res.data.description);
        setValue("img", res.data.img);
        setValue("promotionalPrice", res.data.promotionalPrice);
        setValue("category", res.data.category._id);
        setValue("activePromotion", res.data.activePromotion);
        setValue("avaliable", res.data.avaliable);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  }, []);

  async function updateProduto(data) {
    axios
      .put(`http://localhost:3000/product/${params.id}`, data)
      .then((res) => {
        alert("Produto atualizado!");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  }

  async function deleteProduto(data) {
    const confirma = confirm("Deseja excluir esse produto?");
    if (confirma) {
      axios
        .delete(`http://localhost:3000/product/${params.id}`, data)
        .then((res) => {
          alert("Produto excluido!");
          console.log(res.data);
          navigate("/produtos");
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {});
    }
  }

  return { updateProduto, deleteProduto, register, handleSubmit, errors };
};
