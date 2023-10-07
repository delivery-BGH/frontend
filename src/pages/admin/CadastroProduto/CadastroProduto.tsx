/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox"
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"
import { useCreateProduto } from "@/forms/CadastroProduto/useCadastroProduto";
import { cn } from "@/lib/utils";

const CadastroProdutos = () => {
  const { createProduto, register, handleSubmit, errors, loading, status: statusForm } = useCreateProduto();
  const [prom, setProm] = useState(false);
  const [card, setCard] = useState(false);
  const [status, setStatus] = useState(statusForm);
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState<Array<unknown>>()

  useEffect(() => {
    axios.get("http://localhost:3000/category")
      .then((res) => { setCategorias(res.data) })
      .catch(() => { })
      .finally(() => { })
  }, [])

  const submit = (data: any) => {
    createProduto(data, card, prom)
  }

  return (
    <div className=" w-4/5">
      <div className={cn("h-[45px] w-[75px] border-[1px] border-red-600 scale-0", loading && "scale-100")}>Loading</div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <Input type="text" id="nome" {...register("name")} />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="preco">Preço:</label>
          <Input type="number" id="preco" {...register("price")} />
          {errors.price && <span>{errors.price.message}</span>}
        </div>
        <div>
          <label htmlFor="desc">Descrição:</label>
          <Input type="text" id="desc" {...register("description")} />
          {errors.description && <span>{errors.description.message}</span>}
        </div>
        <div>
          <label htmlFor="img">Url da imagem</label>
          <Input type="text" id="img" {...register("img")} />
        </div>
        <div>
          <label htmlFor="precoProm">Preço Promocional:</label>
          <Input type="number" id="precoProm" {...register("promotionalPrice")} />
          {errors.promotionalPrice && <span>{errors.promotionalPrice.message}</span>}
        </div>
        <div>
          <label htmlFor="category">Categoria</label>
          <select
            className="bg-background"
            id="category"
            required
            {...register("category")}
          // value={category.name}
          >
            <option disabled value="">
              Selecione uma categoria...
            </option>

            {categorias && categorias.map((category: any, index: number) => (
              <option
                className="bg-background"
                key={index}
                value={category.name}
              >
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <span>{errors.category?.message}</span>
        <div>
          <h4>Ativar promoção</h4>
          <Checkbox onClick={() => { setProm(!prom) }} />
        </div>
        <div className="">
          <h4>Liberar no Cardápio</h4>
          <Checkbox onClick={() => { setCard(!card) }} />
        </div>
        <button
          type="submit"
          className="bg-lime-600 rounded-lg text-2xl p-2 mt-3 hover:bg-slate-700"
        >
          Cadastrar
        </button>
      </form>

      <AlertDialog open={statusForm}>
        <AlertDialogContent >
          <AlertDialogHeader>
            <AlertDialogTitle>Gabriel é muito lindo!</AlertDialogTitle>
            <AlertDialogDescription>
              Gabriel é muito lindo!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => {
              navigate('/');
              setStatus(false);
            }}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};


export default CadastroProdutos;