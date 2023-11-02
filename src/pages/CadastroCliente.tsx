/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import { useCadastroCliente } from "@/forms/Clientes/CadastroCliente/useCadastroCliente";

const CadastroCliente = () => {
  const { register, handleSubmit, handleFormSubmit, errors } =
    useCadastroCliente();

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <label htmlFor="name">Nome Completo</label>
        <Input className="bg-background" type="text" {...register("name")} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div>
        <label htmlFor="email">E-mail</label>
        <Input className="bg-background" type="email" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label htmlFor="senha">Senha</label>
        <Input
          className="bg-background"
          type="password"
          {...register("password")}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <div>
        <label htmlFor="cpf">CPF</label>
        <Input
          className="bg-background"
          type="number"
          maxLength={11}
          {...register("document")}
        />
        {errors.document && <span>{errors.document.message}</span>}
      </div>

      <div>
        <label htmlFor="celular">Celular</label>
        <Input
          className="bg-background"
          type="number"
          {...register("phoneNumber")}
        />
        {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
      </div>

      <div>
        <label htmlFor="cep">CEP</label>
        <Input
          className="bg-background"
          type="number"
          {...register("zipCode")}
        />
        {errors.zipCode && <span>{errors.zipCode.message}</span>}
      </div>

      <div>
        <label htmlFor="cidade">Cidade</label>
        <Input className="bg-background" {...register("city")} />
        {errors.city && <span>{errors.city.message}</span>}
      </div>

      <div>
        <label htmlFor="bairro">Bairro</label>
        <Input
          className="bg-background"
          type="text"
          {...register("neighborhood")}
        />
        {errors.neighborhood && <span>{errors.neighborhood.message}</span>}
      </div>

      <div>
        <label htmlFor="rua">Rua</label>
        <Input className="bg-background" type="text" {...register("street")} />
        {errors.street && <span>{errors.street.message}</span>}
      </div>

      <div>
        <label htmlFor="nnumero">Número</label>
        <Input
          className="bg-background"
          type="number"
          {...register("number")}
        />
        {errors.number && <span>{errors.number.message}</span>}
      </div>
      <button
        type="submit"
        className="bg-lime-600 rounded-lg text-2xl p-2 mt-3 hover:bg-slate-700"
      >
        Cadastrar
      </button>
    </form>
  );
};

export default CadastroCliente;
