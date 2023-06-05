import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  createContactData,
  createContactSchema,
} from "../validators/createContact";
import { api } from "../services/api";
import { Form } from "../styles/forms";

export function CreateContact() {
  const { register, handleSubmit } = useForm<createContactData>({
    resolver: zodResolver(createContactSchema),
  });

  async function newContact(data: createContactData) {
    try {
      await api.post(`/contacts/`, data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h2>Criar novo contato</h2>
      <Form onSubmit={handleSubmit(newContact)}>
        <input type="text" placeholder="name" {...register("name")} />
        <input type="text" placeholder="email" {...register("email")} />
        <input type="text" placeholder="cellPhone" {...register("cellPhone")} />
        <button type="submit">Salvar contato</button>
      </Form>
    </div>
  );
}
