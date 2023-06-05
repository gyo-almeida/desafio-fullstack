import { api } from "../services/api";

export function DeleteContact({ contactId, remove }) {
  async function deleteContact() {
    try {
      await api.delete(`/contacts/${contactId}`);

      remove();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h2> Tem certeza que deseja deletar este contato?</h2>
      <div className="buttons">
        <button type="button" onClick={deleteContact}>
          Deletar
        </button>
        <button type="button" onClick={remove}>
          Cancelar
        </button>
      </div>
    </div>
  );
}
