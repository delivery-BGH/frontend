/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import { useCreateAcompanhamento } from "@/forms/Acompanhamentos/CadastroAcompanhamentos/useCadastroAcompanhamentos";

export function CadastroAcompanhamentos() {
  const { register, errors, handleSubmit, CreateAcompanhamentos } =
    useCreateAcompanhamento();

  const submit = (data: any) => {
    CreateAcompanhamentos(data);
  };
  return (
    <>
      <div className=" w-4/5">
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <label htmlFor="name">Nome:</label>
            <Input type="text" id="name" {...register("name")} />
            {errors.name && <span>{errors.name?.message}</span>}
          </div>
          <div>
            <label htmlFor="description">Descrição:</label>
            <Input type="text" id="description" {...register("description")} />
            {errors.description && <span>{errors.description?.message}</span>}
          </div>
          <div>
            <label htmlFor="price">Preço:</label>
            <Input
              type="number"
              id="price"
              step={0.01}
              {...register("price")}
            />
            {errors.price && <span>{errors.price?.message}</span>}
          </div>
          <div className="">
            <h4>Disponível</h4>
            <input type="checkbox" {...register("avaliable")} />
            <span>{errors.avaliable?.message}</span>
          </div>
          <button
            type="submit"
            className="bg-lime-600 rounded-lg text-2xl p-2 mt-3 hover:bg-slate-700"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </>
  );
}
