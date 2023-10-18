import { Input } from "@/components/ui/input";
import { useUpdateCategory } from "@/forms/Categorias/UpdateCategory/useUpdateCategory";

export function UpdateCategory() {
  const { register, handleSubmit, errors, updateCategory, deleteCategory } =
    useUpdateCategory();

  const submit = (data: any) => {
    updateCategory(data);
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
          <button
            type="submit"
            className="bg-lime-600 rounded-lg text-2xl p-2 mt-3 hover:bg-slate-700"
          >
            Salvar
          </button>
          <button
            type="button"
            className="bg-red-600 rounded-lg text-2xl p-2 mt-3 hover:bg-slate-700"
            onClick={deleteCategory}
          >
            Excluir
          </button>
        </form>
      </div>
    </>
  );
}
