import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterData, schema } from "./validator";
import { useRegister } from "../../hooks/useRegister";

export function Register() {
  const { register, handleSubmit } = useForm<RegisterData>({
    resolver: zodResolver(schema),
  });

  const { createCount } = useRegister();

  return (
    <main>
      <h2>Cadastre-se</h2>

      <form onSubmit={handleSubmit(createCount)}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="cellPhone">Celular</label>
        <input type="cellPhone" id="cellPhone" {...register("cellPhone")} />

        <label htmlFor="name">Nome Completo</label>
        <input type="name" id="name" {...register("name")} />

        <label htmlFor="password">Senha</label>
        <input type="password" id="password" {...register("password")} />

        <button type="submit">Cadastrar</button>
      </form>
    </main>
  );
}
