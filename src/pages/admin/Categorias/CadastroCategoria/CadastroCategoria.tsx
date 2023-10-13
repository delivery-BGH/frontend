import { Input } from "@/components/ui/input";
import { useCreateCategory } from "@/forms/CadastroCategoria/useCadastroCategoria";

export function CadastroCategorias() {
  const {register, errors, handleSubmit, CreateCategory} = useCreateCategory()

  const submit = (data: any) => {
    CreateCategory(data)
  }
  return (
    <>
      <div className=" w-4/5">
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <label htmlFor="name">Nome:</label>
            <Input type="text" {...register("name")}/>
            {errors.name && <span>{errors.name?.message}</span>}
          </div>
          <div>
            <label htmlFor="description">Descrição:</label>
            <Input type="text" {...register("description")}/>
            {errors.description && <span>{errors.description?.message}</span>}
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
