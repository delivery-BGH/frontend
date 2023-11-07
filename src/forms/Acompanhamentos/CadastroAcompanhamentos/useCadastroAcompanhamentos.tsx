/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { createAcompanhamentoForm } from "./types";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { createAcompanhamentoFormSchema } from "./schema";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function useCreateAcompanhamento() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createAcompanhamentoForm>({
    resolver: zodResolver(createAcompanhamentoFormSchema),
    mode: "all",
    criteriaMode: "all",
  });

  const CreateAcompanhamentos = (data: any) => {
    axios
      .post(`http://localhost:3000/sideDish`, { ...data })
      .then((res) => {
        console.log(res.data);
        alert("Acompanhamento cadastrado");
        navigate("/sideDish");
      })
      .catch((err) => {
        console.log(`Não foi possível cadastrar acompanhamento ${err}`);
      });
  };

  return { register, handleSubmit, errors, CreateAcompanhamentos };
}
