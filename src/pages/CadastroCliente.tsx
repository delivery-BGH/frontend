/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import { useCadastroCliente } from "@/forms/CadastroCliente/useCadastroCliente";

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
        <label htmlFor="email">Senha</label>
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
          {...register("cpf")}
        />
        {errors.cpf && <span>{errors.cpf.message}</span>}
      </div>

      <div>
        <label htmlFor="celular">Celular</label>
        <Input
          className="bg-background"
          type="number"
          {...register("celular")}
        />
        {errors.celular && <span>{errors.celular.message}</span>}
      </div>

      <div>
        <label htmlFor="cep">CEP</label>
        <Input className="bg-background" type="number" {...register("cep")} />
        {errors.cep && <span>{errors.cep.message}</span>}
      </div>

      <div>
        <label htmlFor="cidade">Cidade</label>
        <Input className="bg-background" {...register("cidade")} />
        {errors.cidade && <span>{errors.cidade.message}</span>}
      </div>

      <div>
        <label htmlFor="bairro">Bairro</label>
        <Input className="bg-background" type="text" {...register("bairro")} />
        {errors.cidade && <span>{errors.cidade.message}</span>}
      </div>

      <div>
        <label htmlFor="rua">Rua</label>
        <Input className="bg-background" type="text" {...register("rua")} />
        {errors.rua && <span>{errors.rua.message}</span>}
      </div>

      <div>
        <label htmlFor="nnumero">Número</label>
        <Input
          className="bg-background"
          type="number"
          {...register("numero")}
        />
        {errors.numero && <span>{errors.numero.message}</span>}
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
