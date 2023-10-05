/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox"
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"
import { useCreateProduto } from "@/forms/CadastroProduto/useCadastroProduto";

const CadastroProdutos = () => {
  const { handleSubmit, errors, createProduto, register } = useCreateProduto()
  const [prom, setProm] = useState(false)
  const [card, setCard] = useState(false)
  const [status, setStatus] = useState(false)
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState<Array<unknown>>()

  useEffect(() => {
    axios.get("http://localhost:3000/categorias")
      .then((res) => { setCategorias(res.data) })
      .catch(() => { })
      .finally(() => { })
  }, [])

  const submit = (data: any) => {
    createProduto(data, card, prom)
  }

  return (
    <div className=" w-4/5">
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <Input type="text" {...register("nome")} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </div>
        <div>
          <label htmlFor="nome">Preço:</label>
          <Input type="number" {...register("preco")} />
          {errors.preco && <span>{errors.preco.message}</span>}
        </div>
        <div>
          <label htmlFor="nome">Descrição:</label>
          <Input type="text" {...register("descricao")} />
          {errors.descricao && <span>{errors.descricao.message}</span>}
        </div>
        <div>
          <label htmlFor="nome">Url da imagem</label>
          <Input type="text" {...register("urlImg")} />
        </div>
        <div>
          <label htmlFor="nome">Preço Promocional:</label>
          <Input type="number" {...register("precoPromocional")} />
          {errors.precoPromocional && <span>{errors.precoPromocional.message}</span>}
        </div>
        <div>
          <label htmlFor="category">Categoria</label>
          <select
            className="bg-background"
            id="category"
            required
            {...register("categoria")}
          // value={category.name}
          >
            <option disabled value="">
              Selecione uma categoria...
            </option>

            {categorias && categorias.map((category: any, index: number) => (
              <option
                className="bg-background"
                key={index}
                value={category.nome}
              >
                {category.nome}
              </option>
            ))}
          </select>
        </div>
        <span>{errors.categoria?.message}</span>
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

      <AlertDialog open={status}>
        <AlertDialogContent >
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
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