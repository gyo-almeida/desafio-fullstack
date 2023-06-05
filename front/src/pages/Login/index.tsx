import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginData, schema } from "./validator";
import { useAuth } from "../../hooks/useAuth";
import { LinkButton, Main } from "../../styles/main";
import { Form } from "../../styles/forms";
import { motion } from "framer-motion";

export function Login() {
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(schema),
  });

  const { signIn } = useAuth();

  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 200, opacity: 0 }}
    >
      <Main>
        <h2>Login</h2>

        <Form onSubmit={handleSubmit(signIn)}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />

          <label htmlFor="password">Senha</label>
          <input type="password" id="password" {...register("password")} />

          <button type="submit">Logar</button>
        </Form>

        <p>Ainda não tem cadastro? Crie aqui sua conta</p>
        <LinkButton to={"/register"}>Cadastrar</LinkButton>
      </Main>
    </motion.div>
  );
}
