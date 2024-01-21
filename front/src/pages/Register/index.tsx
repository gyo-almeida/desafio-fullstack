import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterData, schema } from "./validator";
import { useRegister } from "../../hooks/useRegister";
import { Main } from "../../styles/main";
import { Form } from "../../styles/forms";
import { motion } from "framer-motion";

export function Register() {
  const { register, handleSubmit } = useForm<RegisterData>({
    resolver: zodResolver(schema),
  });

  const { createCount } = useRegister();
  
  const choose_background = (e) => {
    const span = e.target
    
    const backgroundColor = getComputedStyle(span).backgroundImage;

    document.body.style.backgroundImage = backgroundColor;
    document.querySelector('h1')!.style.backgroundImage = backgroundColor
  }

  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -200, opacity: 0 }}
    >
      <Main>
        <h1>SKY CONTACTS</h1>
        <h2>Cadastre-se</h2>

        <p className="errors">(*) campos obrigatórios</p>

        <Form onSubmit={handleSubmit(createCount)}>
          <label htmlFor="email">Email<span style={{ color: 'red' }}>*</span></label>
          <input type="email" id="email" {...register("email")} />

          <label htmlFor="cellPhone">Celular<span style={{ color: 'red' }}>*</span></label>
          <input type="tell" id="cellPhone" {...register("cellPhone")} />
          
          <label htmlFor="name">Nome Completo<span style={{ color: 'red' }}>*</span></label>
          <input type="text" id="name" {...register("name")} />

          <label htmlFor="password">Senha<span style={{ color: 'red' }}>*</span></label>
          <input type="password" id="password" {...register("password")} />

          <button className="submit" type="submit">Cadastrar</button>
        </Form>

          <h4>Escolha sua cor de fundo</h4>

        <div className="background-choose">
          <span className="background-1 background-span" onClick={choose_background}></span>
          <span className="background-2 background-span" onClick={choose_background}></span>
          <span className="background-3 background-span" onClick={choose_background}></span>
          <span className="background-4 background-span" onClick={choose_background}></span>
          <span className="background-5 background-span" onClick={choose_background}></span>
          <span className="background-6 background-span" onClick={choose_background}></span>
          <span className="background-7 background-span" onClick={choose_background}></span>
        </div>
      </Main>
    </motion.div>
  );
}
