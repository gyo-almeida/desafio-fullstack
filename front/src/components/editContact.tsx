import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { EditData, EditSchema } from "../validators/editContacts";
import { api } from "../services/api";
import { Form } from "../styles/forms";

export function EditModal({ contactId }) {
  const { register, handleSubmit } = useForm<EditData>({
    resolver: zodResolver(EditSchema),
  });

  async function editInfos(data: EditData) {
    try {
      const request = await api.patch(`/contacts/${contactId}`, data);
      console.log(request);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h2>Editar Contato</h2>
      <Form onSubmit={handleSubmit(editInfos)}>
        <input type="text" placeholder="name" {...register("name")} />
        <input type="text" placeholder="email" {...register("email")} />
        <input type="text" placeholder="cellPhone" {...register("cellPhone")} />
        <button type="submit">Salvar contato</button>
      </Form>
    </div>
  );
}
