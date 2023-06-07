import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { EditData, EditSchema } from "../validators/editContacts";
import { api } from "../services/api";
import { Form } from "../styles/forms";
import { ContactModal } from "./deleteContact";

export function EditModal({ contactId, remove }: ContactModal) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditData>({
    resolver: zodResolver(EditSchema),
  });
  console.log(errors);

  async function editInfos(data: EditData) {
    try {
      await api.patch(`/contacts/${contactId}`, data);

      remove();
      location.reload();
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
        <button type="submit">Editar contato</button>
      </Form>
    </div>
  );
}
