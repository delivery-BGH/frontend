import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { UpdateUser } from "./types";
import { updateUserSchema } from "./schema";
import axios from "axios";
import { useEffect } from "react";

export const useUpdateUser = () => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    setValue,

    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateUser>({
    resolver: zodResolver(updateUserSchema),
    mode: "all",
    criteriaMode: "all",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/${params.id}`)
      .then((res) => {
        setValue("name", res.data.name);
        setValue("email", res.data.email);
        setValue("document", res.data.document);
        setValue("phoneNumber", res.data.phoneNumber);
        setValue("zipCode", res.data.zipCode);
        setValue("city", res.data.city);
        setValue("neighborhood", res.data.neighborhood);
        setValue("street", res.data.street);
        setValue("number", res.data.number);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function updateUser(data: {
    name: string;
    email: string;
    document: string;
    phoneNumber: number;
    zipCode: string;
    city: string;
    neighborhood: string;
    street: string;
    number: string;
  }) {
    axios
      .put(`http://localhost:3000/user/${params.id}`, { data })
      .then((res) => {
        alert("Usuário atualizado!");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  }

  const deleteUser = (data: any) => {
    const confirma = confirm("Deseja excluir essa usuário??");
    if (confirma) {
      axios
        .delete(`http://localhost:3000/user/${params.id}`, data)
        .then((res) => {
          alert("Usuário excluido!");
          console.log(res.data);
          navigate("/user");
        });
    }
  };

  return { register, handleSubmit, errors, updateUser, deleteUser };
};
