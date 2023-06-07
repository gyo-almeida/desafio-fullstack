import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterData, schema } from "./validator";
import { useRegister } from "../../hooks/useRegister";
import { Main } from "../../styles/main";
import { Form } from "../../styles/forms";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";

export function Register() {
  const { register, handleSubmit } = useForm<RegisterData>({
    resolver: zodResolver(schema),
  });

  const { createCount } = useRegister();

  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -200, opacity: 0 }}
    >
      <Toaster />
      <Main>
        <h2>Cadastre-se</h2>

        <Form onSubmit={handleSubmit(createCount)}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />

          <label htmlFor="cellPhone">Celular</label>
          <input type="tell" id="cellPhone" {...register("cellPhone")} />

          <label htmlFor="name">Nome Completo</label>
          <input type="text" id="name" {...register("name")} />

          <label htmlFor="password">Senha</label>
          <input type="password" id="password" {...register("password")} />

          <button type="submit">Cadastrar</button>
        </Form>
      </Main>
    </motion.div>
  );
}
