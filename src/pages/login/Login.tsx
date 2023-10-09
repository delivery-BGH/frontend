/* eslint-disable @typescript-eslint/no-explicit-any */
import useLogin from "@/forms/Login/useLogin";
import { useContext, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { AuthContext } from "@/Context/Auth/AuthContext";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { AlertDialog, AlertDialogFooter, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";

import banner from "@/assets/bannerLogin.png"
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, errors } = useLogin();
  const { singin, loading, error } = useContext(AuthContext);
  const [alertIsOpen, setAlertIsOpen] = useState(false);

  useEffect(() => {
    setAlertIsOpen((error && !alertIsOpen) ? true : false);
  }, [loading, error])

  const submitLogin = (data: any) => {
    singin(data)
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">

      <section className="h-4/5 flex items-center overflow-hidden rounded-3xl shadow-2xl">
        <div className="bg-[#ef9ca6] h-full flex items-center">
          <img src={banner} />
        </div>

        <div className="w-2/3 h-full flex flex-col items-center justify-between bg-secondary">

          <h1 className="pt-24 text-[56px] font-bold">Bem Vindo</h1>

          <form
            onSubmit={handleSubmit(submitLogin)}
            className="w-2/3 flex flex-col justify-center gap-5 "
          >

            <Input
              {...register('email')}
              placeholder="Email"
              className="border-transparent focus-visible:border-2 focus-visible:border-b-primary focus-visible:ring-0"
            />
            {errors.email && <span className="text-orange-400 text-sm">{errors.email.message}</span>}

            <Input type="password" placeholder="Senha" {...register('password')} className="border-transparent focus-visible:border-2 focus-visible:border-b-primary focus-visible:ring-0" />
            {errors.password && <span className="text-orange-400 text-sm">{errors.password.message}</span>}

            <Button type="submit" className="rounded-lg">
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              login
            </Button>
          </form>

          <div className="flex justify-between pb-10 w-2/3">
            <Button variant="link">
              <Link to="/esqueciSenha">Esqueci minha senha</Link>
            </Button>

            <Button variant="outline" className="border-primary rounded-lg">
              <Link to="criarConta">Criar conta</Link>
            </Button>
          </div>
        </div>
      </section>

      <AlertDialog open={alertIsOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Credenciais invalidas</AlertDialogTitle>
            <AlertDialogDescription>
              Verifique email e senha.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => { setAlertIsOpen(false) }}>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default Login