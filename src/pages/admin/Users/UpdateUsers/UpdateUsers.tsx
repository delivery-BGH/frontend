import { Input } from "@/components/ui/input";
import { useUpdateUser } from "@/forms/Clientes/UpdateClientes/useUpdateClientes";

export function UpdateUser(){
 const {register, handleSubmit, errors, updateUser, deleteUser} = useUpdateUser()
    return (
        <form onSubmit={handleSubmit(updateUser)}>
      <div>
        <label htmlFor="name">Nome Completo</label>
        <Input className="bg-background" type="text" id="name"{...register("name")} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div>
        <label htmlFor="email">E-mail</label>
        <Input className="bg-background" type="email" id="email" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      

      <div>
        <label htmlFor="cpf">CPF</label>
        <Input
          className="bg-background"
          type="number"
          maxLength={11}
          id="cpf"{...register("document")}
        />
        {errors.document && <span>{errors.document.message}</span>}
      </div>

      <div>
        <label htmlFor="celular">Celular</label>
        <Input
          className="bg-background"
          type="number"
          id="phone"{...register("phoneNumber")}
        />
        {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
      </div>

      <div>
        <label htmlFor="cep">CEP</label>
        <Input className="bg-background" type="number" id="cep"{...register("zipCode")} />
        {errors.zipCode && <span>{errors.zipCode.message}</span>}
      </div>

      <div>
        <label htmlFor="cidade">Cidade</label>
        <Input className="bg-background" id="cidade"{...register("city")} />
        {errors.city && <span>{errors.city.message}</span>}
      </div>

      <div>
        <label htmlFor="bairro">Bairro</label>
        <Input className="bg-background" type="text" id="bairro" {...register("neighborhood")} />
        {errors.neighborhood && <span>{errors.neighborhood.message}</span>}
      </div>

      <div>
        <label htmlFor="rua">Rua</label>
        <Input className="bg-background" type="text" id="rua" {...register("street")} />
        {errors.street && <span>{errors.street.message}</span>}
      </div>

      <div>
        <label htmlFor="nnumero">Número</label>
        <Input
          className="bg-background"
          type="number"
          id="number"{...register("number")}
        />
        {errors.number && <span>{errors.number.message}</span>}
      </div>
      <div className="flex flex-row gap-2">
      <button
        type="submit"
        className="bg-lime-600 rounded-lg text-2xl p-2 mt-3 hover:bg-slate-700"
      >
        Salvar
      </button>
      <button
        onClick={deleteUser}
        className="bg-rose-600 rounded-lg text-2xl p-2 mt-3 hover:bg-slate-700"
      >
        Excluir
      </button>
      </div>
    </form>
  );
    
}