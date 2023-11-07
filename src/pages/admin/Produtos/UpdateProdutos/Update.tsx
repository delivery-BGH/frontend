import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useUpdateProduto } from "@/forms/UpdateProduto/useUpdateProduto";
import axios from "axios";
import { Modal } from "../../../../components/Modal/ModalAcompanhamentos/Modal.tsx";
import { useParams } from "react-router-dom";
import { Produto, productSchema } from "@/validators/produto/Produto.ts";

export function UpdateProduto() {
  const { errors, handleSubmit, updateProduto, register, deleteProduto } =
    useUpdateProduto();
  const [categories, setCategories] =
    useState<Array<{ _id: string; name: string }>>();
  const [produto, setProduto] = useState<Produto>();
  const params = useParams<{ id: string }>();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/category")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios.get(`http://localhost:3000/product/${params.id}`).then((res) => {
      const parse = productSchema.safeParse(res.data);
      if (parse.success) {
        setProduto(parse.data);
      } else {
        console.log(parse);
      }
    });
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
      <div>
        <Modal
          isOpen={open}
          setOpen={setOpen}
          acompanhamentos={produto?.sideDish}
        />
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
        <div className="flex flex-row gap-2">
          <button
            type="submit"
            className="bg-lime-600 rounded-lg text-2xl p-2 mt-3 hover:bg-slate-700"
          >
            Salvar
          </button>

          <button
            type="button"
            className="bg-red-600 rounded-lg text-2xl p-2 mt-3 hover:bg-slate-700"
            onClick={deleteProduto}
          >
            Excluir
          </button>
        </div>
      </form>
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-600 rounded-lg text-2xl p-2 mt-3 hover:bg-slate-700"
      >
        Acompanhamentos
      </button>

      <div>
        <h1 className="text-xl">Acompanhamentos:</h1>
        {produto?.sideDish.map((sideDish) => (
          <ul key={sideDish._id}>
            <li>{sideDish.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
