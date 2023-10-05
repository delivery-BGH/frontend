/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox"
import { useCreateProduto } from "@/forms/CadastroProduto/useCadastroProduto";
import { useEffect, useState } from "react";
import axios from 'axios';

export const CadastroProdutos = () => {
  const { createProduto, register, handleSubmit, errors } = useCreateProduto()
  const [prom, setProm] = useState(false)
  const [card, setCard] = useState(false)
  const [categorias, setCategorias] = useState<Array<unknown>>();

  useEffect(() => {
    axios.get('http://localhost:3000/categorias')
      .then((res) => {
        setCategorias(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {

      })
  }, [])

  const x = (data: unknown) => {
    createProduto(data, card, prom)
  }

  return (
    <>
      <form onSubmit={handleSubmit(x)}>
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

            {categorias && categorias?.map((category: any, index: number) => (
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
    </>
  );
};
