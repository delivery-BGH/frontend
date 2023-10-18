import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useCreateProduto } from "@/forms/CadastroProduto/useCadastroProduto";
import { useUpdateProduto } from "@/forms/UpdateProduto/useUpdateProduto";
import axios from "axios";
import { Toggle } from "@/components/ui/toggle";

export function UpdateProduto() {
  const { errors, handleSubmit, updateProduto, register, deleteProduto } =
    useUpdateProduto();
  const [categories, setCategories] =
    useState<Array<{ _id: string; name: string }>>();

  useEffect(() => {
    axios
      .get("http://localhost:3000/category")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  }, []);

  return (
    <div className=" w-4/5">
      <div
        className={cn(
          "h-[45px] w-[75px] border-[1px] border-red-600 scale-0",
          "scale-100"
        )}
      >
        Loading
      </div>
      <form onSubmit={handleSubmit(updateProduto)}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <Input type="text" id="nome" {...register("name")} />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="preco">Preço:</label>
          <Input step={0.01} type="number" id="preco" {...register("price")} />
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
          <Input
            step={0.01}
            type="number"
            id="precoProm"
            {...register("promotionalPrice")}
          />
          {errors.promotionalPrice && (
            <span>{errors.promotionalPrice.message}</span>
          )}
        </div>
        <div className="flex flex-row gap-2">
          <label htmlFor="category">Categoria</label>
          <select
            className="bg-background"
            id="category"
            required
            {...register("category")}
          >
            <option selected value="123">
              Selecione uma categoria...
            </option>

            {categories?.map((category, index: number) => (
              <option
                className="bg-background"
                key={index}
                value={category._id}
              >
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <span>{errors.category?.message}</span>
        <div>
          <h4>Ativar promoção</h4>
          {/* <Checkbox {...register("activePromotion")} /> */}
          <input type="checkbox" {...register("activePromotion")} />
          <span>{errors.activePromotion?.message}</span>
        </div>
        <div className="">
          <h4>Liberar no Cardápio</h4>
          <input type="checkbox" {...register("avaliable")} />
          <span>{errors.avaliable?.message}</span>
        </div>
        <button
          type="submit"
          className="bg-lime-600 rounded-lg text-2xl p-2 mt-3 hover:bg-slate-700"
        >
          Atualizar
        </button>
        <button
          type="button"
          className="bg-red-600 rounded-lg text-2xl p-2 mt-3 hover:bg-slate-700"
          onClick={deleteProduto}
        >
          Excluir
        </button>
      </form>

      {/* <AlertDialog open={statusForm}>
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
      </AlertDialog> */}
    </div>
  );
}
