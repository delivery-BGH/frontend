import "../styles/global.css";
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

const createUserFormSchema = z.object({
  name: z.string()
  .nonempty("O nome é obrigatório")
  .transform(name => {
    return name.trim().split(' ').map(word => {
      return word[0].toLocaleUpperCase().concat(word.substring(1))
    }).join(' ')
  }),
  email: z.string()
  .nonempty('O E-mail é obrigatório')
  .email("Formato de E-mail inválido")
  .toLowerCase(),
  password: z.string()
  .min(6, "A senha precisa de no mínimo 6 caracteres"),
  cpf: z.string()
  .min(11, "O tamanho do CPF deve ser de 11 números")
  .max(11, "Ultrapassou o limite de 11 números"),
  celular: z.string()
  .min(11, "O tamanho do número de celular é 11")
  .max(11, "Ultrapassou 11 números"),
  cep: z.string()
  .min(8, "O tamanho do CEP deve ser 8 números")
  .max(8, "Ultrapassou 9 números"),
  cidade: z.string()
  .nonempty("O nome da cidade é obrigatório"),
  bairro: z.string()
  .nonempty("O nome do Bairro é obrigatório"),
  rua: z.string()
  .nonempty("O nome da Rua é obrigatório"),
  numero: z.string()
  .min(2, "Deve possuir pelo menos 2 números")
  
  
  
})

type createUserFormData = z.infer<typeof createUserFormSchema>

function CadastroCliente() {
  const { register, handleSubmit, formState: {errors} } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema)
  }) 

  

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function createUser(data: any){
     const response = await fetch('http://localhost:3000/clientes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...data})
     })
    console.log(response)
  }

  return (
    <>
      <main >
        
          <form onSubmit={handleSubmit(createUser)} >
            <div >
              <label htmlFor="name">Nome Completo</label>
              <input  type="text" {...register('name')}/>
              {errors.name && <span>{errors.name.message}</span>}
            </div>

            <div >
              <label htmlFor="email">E-mail</label>
              <input  type="email" {...register('email')}/>
              {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div >
              <label htmlFor="email">Senha</label>
              <input  type="password" {...register('password')}/>
              {errors.password && <span>{errors.password.message}</span>}
            </div>

            <div >
              <label htmlFor="cpf">CPF</label>
              <input  type="number" maxLength={11} {...register('cpf')}/>
              {errors.cpf && <span>{errors.cpf.message}</span>}
            </div>

            <div >
              <label htmlFor="celular">Celular</label>
              <input  type="number"{...register('celular')}/>
              {errors.celular && <span>{errors.celular.message}</span>}
            </div>

            <div >
              <label htmlFor="cep">CEP</label>
              <input  type="number" {...register('cep')}/>
              {errors.cep && <span>{errors.cep.message}</span>}
            </div>

            <div >
              <label htmlFor="cidade">Cidade</label>
              <input  type="text" {...register('cidade')}/>
              {errors.cidade && <span>{errors.cidade.message}</span>}
            </div>

            <div >
              <label htmlFor="bairro">Bairro</label>
              <input  type="text" {...register('bairro')}/>
              {errors.cidade && <span>{errors.cidade.message}</span>}
            </div>

            <div >
              <label htmlFor="rua">Rua</label>
              <input type="text" {...register('rua')}/>
              {errors.rua && <span>{errors.rua.message}</span>}
            </div >

            <div>
              <label htmlFor="nnumero">Número</label>
              <input   type="number"{...register('numero')}/>
              {errors.numero && <span>{errors.numero.message}</span>}
            </div>
            <button
          type="submit"
          className="bg-lime-600 rounded-lg text-2xl p-2 mt-3 hover:bg-slate-700"
        >
          Cadastrar
        </button>
          </form>
        
      </main>
    </>
  );
}

export default CadastroCliente;
