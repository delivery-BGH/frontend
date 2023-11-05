import { Input } from "@/components/ui/input";
import useUpdateAcompanhamentos from "@/forms/Acompanhamentos/UpdateAcompanhamentos/useUpdateAcompanhamentos";

export function UpdateAcompanhamentos() {
  const {
    register,
    handleSubmit,
    errors,
    UpdateAcompanhamentos,
    DeleteAcompanhamentos,
  } = useUpdateAcompanhamentos();
  return (
    <>
      <>
        <div className=" w-4/5">
          <form onSubmit={handleSubmit(UpdateAcompanhamentos)}>
            <div>
              <label htmlFor="name">Nome:</label>
              <Input type="text" id="name" {...register("name")} />
              {errors.name && <span>{errors.name?.message}</span>}
            </div>
            <div>
              <label htmlFor="description">Descrição:</label>
              <Input
                type="text"
                id="description"
                {...register("description")}
              />
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
                onClick={DeleteAcompanhamentos}
              >
                Excluir
              </button>
            </div>
          </form>
        </div>
      </>
    </>
  );
}
