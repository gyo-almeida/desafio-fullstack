import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  createContactData,
  createContactSchema,
} from "../validators/createContact";
import { api } from "../services/api";
import { Form } from "../styles/forms";
import toast from "react-hot-toast";

interface CreateContact {
  remove: () => void;
}

export function CreateContact({ remove }: CreateContact) {
  const { register, handleSubmit } = useForm<createContactData>({
    resolver: zodResolver(createContactSchema),
  });

  async function newContact(data: createContactData) {
    try {
      const response = await api.post(`/contacts/`, data);

      if (response.status === 200) {
        toast.success(`Usuário editado com sucesso`, {
          style: {
            border: "1px solid #27AE60",
            padding: "16px",
            color: "#27AE60",
            background: "#F5F5F5",
          },
          iconTheme: {
            primary: "#27AE60",
            secondary: "#F5F5F5",
          },
        });
      }

      remove();
      location.reload();
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
