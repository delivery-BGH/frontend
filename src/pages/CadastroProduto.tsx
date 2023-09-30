import { useState } from "react";
import { CATEGORIES } from "../entities/AddCategory";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

export const CadastroProdutos = () => {
  const [item, setItem] = useState({ category: "" }); // Inicialize o estado com um objeto que contém a propriedade 'category'

  const createUserFormSchema = z.object({
    nome: z.string().nonempty("Nome obrigatório"),
    preco: z.string().nonempty("Obrigatório"),
    descricao: z.string().nonempty("Obrigatório"),
    precoProm: z.string().nonempty("Obrigatório"),
    categoria: z.string().refine((value) => CATEGORIES.includes(value), {
      message: "Categoria inválida",
    }),
    url: z.string().refine(
      (value) => {
        // Adicione sua lógica de validação personalizada para a URL aqui
        // Por exemplo, você pode usar uma expressão regular para verificar se é uma URL válida.
        // Aqui está um exemplo simples que verifica se a URL começa com "http://" ou "https://":
        return value.startsWith("http://") || value.startsWith("https://");
      },
      {
        message: "URL inválida",
      }
    ),
    ativarProm: z.boolean(),
    ativarCard: z.boolean()
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
    mode: "all",
    criteriaMode: "all",
  });
  type createUserFormData = z.infer<typeof createUserFormSchema>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCategoryChange = (ev: any) => {
    // Atualize o estado 'item' com o valor selecionado
    setItem({ ...item, category: ev.target.value });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function createProduto(data: any) {
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(createProduto)}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" {...register("nome")} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </div>
        <div>
          <label htmlFor="nome">Preço:</label>
          <input type="number" {...register("preco")} />
          {errors.preco && <span>{errors.preco.message}</span>}
        </div>
        <div>
          <label htmlFor="nome">Descrição:</label>
          <input type="text" {...register("descricao")} />
          {errors.descricao && <span>{errors.descricao.message}</span>}
        </div>
        <div>
          <label htmlFor="nome">Url da imagem</label>
          <input type="text" {...register("url")} />
        </div>
        <div>
          <label htmlFor="nome">Preço Promocional:</label>
          <input type="number" {...register("precoProm")} />
          {errors.precoProm && <span>{errors.precoProm.message}</span>}
        </div>
        <div>
          <label htmlFor="category">Categoria</label>
          <select
            id="category"
            required
            {...register("categoria")}
            value={item.category}
            onChange={handleCategoryChange}
          >
            <option disabled value="">
              Selecione uma categoria...
            </option>
            {CATEGORIES.map((category) => (
              <option
                key={category}
                value={category}
                defaultChecked={item.category === category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h4>Ativar promoção</h4>
          <label className="relative inline-flex items-center cursor-pointer">
            <input className="sr-only peer" value="" type="checkbox" {...register("ativarProm")}/>
            <div className=" peer ring-2 ring-gray-500 bg-gradient-to-r from-rose-400 to-red-900 rounded-full outline-none duration-500 after:duration-300 w-20 h-5  shadow-inner peer-checked:bg-gradient-to-r peer-checked:from-emerald-500 peer-checked:to-emerald-900 shadow-gray-900 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-500  after:content-[''] after:rounded-full after:absolute after:outline-none after:h-9 after:w-9 after:bg-gray-900 after:-top-2 after:-left-2 after:flex after:justify-center after:items-center after:border-4 after:border-gray-500  peer-checked:after:translate-x-14"></div>
          </label>
        </div>
        <div className="">
          <h4>Liberar no Cardápio</h4>
          <label className="relative inline-flex items-center cursor-pointer">
            <input className="sr-only peer" value="" type="checkbox" {...register("ativarCard")}/>
            <div className=" peer ring-2 ring-gray-500 bg-gradient-to-r from-rose-400 to-red-900 rounded-full outline-none duration-500 after:duration-300 w-20 h-5  shadow-inner peer-checked:bg-gradient-to-r peer-checked:from-emerald-500 peer-checked:to-emerald-900 shadow-gray-900 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-500  after:content-[''] after:rounded-full after:absolute after:outline-none after:h-9 after:w-9 after:bg-gray-900 after:-top-2 after:-left-2 after:flex after:justify-center after:items-center after:border-4 after:border-gray-500  peer-checked:after:translate-x-14"></div>
          </label>
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
