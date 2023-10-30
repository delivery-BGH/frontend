import { useForm } from "react-hook-form";
import { updateAcompanhamentoForm } from "./types";
import { updateAcompanhamentoFormSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export default function useUpdateAcompanhamentos(){

    const navigate = useNavigate();

    const params = useParams<{ id: string }>();
    const {
        setValue,
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<updateAcompanhamentoForm>({
        resolver: zodResolver(updateAcompanhamentoFormSchema),
        mode: "all",
        criteriaMode: "all",
      });

      useEffect(() => {
        axios
          .get(`http://localhost:3000/sideDish/${params.id}`)
          .then((res) => {
            setValue("name", res.data.name);
            setValue("description", res.data.description);
            setValue("price", res.data.price)
            setValue("avaliable", res.data.avaliable)
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const UpdateAcompanhamentos = (data: any) => {
        axios
      .put(`http://localhost:3000/sideDish/${params.id}`, data)
      .then((res) => {
        alert("Acompanhamento atualizado atualizada!");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      }

      const DeleteAcompanhamentos = (data: any) => {
        const confirma = confirm("Deseja excluir esse acompanhamento?")
        if(confirma){
            axios.delete(`http://localhost:3000/sideDish/${params.id}`, data)
            .then((res) => {
                console.log(res.data)
                alert("Acompanhamento excluído!")
                navigate("/sideDish")
            })
        }
      }

      return {register, handleSubmit, UpdateAcompanhamentos, errors, DeleteAcompanhamentos}
}