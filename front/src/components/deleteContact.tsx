import { api } from "../services/api";
import { Buttons } from "../styles/button";

export interface ContactModal {
  contactId: string;
  remove: () => void;
}

export function DeleteContact({ contactId, remove }: ContactModal) {
  async function deleteContact() {
    try {
      await api.delete(`/contacts/${contactId}`);

      remove();
      location.reload();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h2> Tem certeza que deseja deletar este contato?</h2>
      <Buttons className="buttons">
        <button type="button" onClick={deleteContact}>
          Deletar
        </button>
        <button type="button" onClick={remove}>
          Cancelar
        </button>
      </Buttons>
    </div>
  );
}
