import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useForm } from "react-hook-form";
import { LoginForm } from "./types";
import { loginSchema } from "./schema";

const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
    criteriaMode: "all",
  });

  return {
    register,
    handleSubmit,
    errors,
  };
};

export default useLogin;
