import { useNavigate } from "react-router-dom";
import { Ul } from "../styles/menu";
import { useState } from "react";
import { customStyles } from "../styles/main";
import Modal from "react-modal";
import { EditUserModal } from "./editUser";

export function Menu() {
  const navigate = useNavigate();
  const [createDropdown, setCreateDropdown] = useState(false);

  function remove() {
    localStorage.removeItem("contactsList:@TOKEN");
    localStorage.removeItem("contactsList:@USER");

    navigate("/", { replace: true });
  }

  const showCreateDropdown = () => {
    setCreateDropdown(true);
  };

  const closeCreateDropdown = () => {
    setCreateDropdown(false);
  };

  return (
    <Ul className="menu">
      <li onClick={showCreateDropdown}>Editar</li>
      <Modal
        isOpen={createDropdown}
        onRequestClose={closeCreateDropdown}
        style={customStyles}
      >
        <EditUserModal />
      </Modal>
      <li onClick={remove}>Sair</li>
    </Ul>
  );
}
