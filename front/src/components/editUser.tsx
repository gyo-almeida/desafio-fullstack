import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { api } from "../services/api";
import { Form } from "../styles/forms";
import { UserData, UserSchema } from "../validators/editUser";

export function EditUserModal({ remove }) {
  const { register, handleSubmit } = useForm<UserData>({
    resolver: zodResolver(UserSchema),
  });

  async function editProfile(data: UserData) {
    const user = localStorage.getItem("contactsList:@USER");

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const userId = JSON.parse(user!);

    try {
      await api.patch(`users/${userId.id}`, data);

      remove();
      location.reload();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h2> Editar Usuário</h2>
      <Form onSubmit={handleSubmit(editProfile)}>
        <input type="text" placeholder="name" {...register("name")} />
        <input type="text" placeholder="email" {...register("email")} />
        <input type="text" placeholder="cellPhone" {...register("cellPhone")} />
        <input type="text" placeholder="password" {...register("password")} />

        <button type="submit">Salvar</button>
      </Form>
    </div>
  );
}
