import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";
import { Main, customStyles } from "../../styles/main";
import { Ul } from "../../styles/lists";
import trash from "../../img/cesto-de-lixo.png";
import edit from "../../img/ferramenta-lapis.png";
import menu from "../../img/menu.png";
import { EditModal } from "../../components/editContact";
import Modal from "react-modal";
import { CreateContact } from "../../components/createContactModal";
import { DeleteContact } from "../../components/deleteContact";
import { Menu } from "../../components/menu";
import { motion } from "framer-motion";

Modal.setAppElement("#root");

interface Contact {
  id: string;
  name: string;
  cellPhone: string;
  createdAt: string;
  email: string;
}

export function Dashboard() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [dropdown, setDropdown] = useState(false);
  const [removeDropdown, setRemoveDropdown] = useState(false);
  const [createDropdown, setCreateDropdown] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [id, setId] = useState("");

  const { user, setUser } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await api.get<Contact[]>("contacts");
      const user = localStorage.getItem("contactsList:@USER");

      setUser(JSON.parse(user));

      setContacts(response.data);
    })();
  }, [setUser, setContacts]);

  const showEditDropdown = (id: string) => {
    setDropdown(true);
    setId(id);
  };

  const closeEditDropdown = () => {
    setDropdown(false);
  };

  const showRemoveDropdown = (id: string) => {
    setRemoveDropdown(true);
    setId(id);
  };

  const closeRemoveDropdown = () => {
    setRemoveDropdown(false);
  };

  const showCreateDropdown = () => {
    setCreateDropdown(true);
  };

  const closeCreateDropdown = () => {
    setCreateDropdown(false);
  };

  return (
    <motion.div
      transition={{ duration: 1 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Main>
        <div className="user-infos">
          <h2>{user?.name}</h2>
          <img src={menu} alt="" onClick={() => setToggle(!toggle)} />
          {toggle && <Menu />}
        </div>
        <p>{user?.email}</p>
        <p>{user?.cellPhone}</p>
        <Ul>
          <div className="contact-box">
            <h3>Contatos</h3>
            <p onClick={showCreateDropdown}>+</p>
            <Modal
              isOpen={createDropdown}
              onRequestClose={closeCreateDropdown}
              style={customStyles}
            >
              <CreateContact />
            </Modal>
          </div>
          {contacts.map((contact) => (
            <>
              <li key={contact.id} id={contact.id}>
                <div className="infos">
                  <p>{contact.name}</p>
                  <p>{contact.cellPhone}</p>
                  <p>{contact.email}</p>
                  <p>{contact.createdAt}</p>
                </div>
                <div className="edit-remove">
                  <img
                    src={trash}
                    alt="remove"
                    onClick={() => showRemoveDropdown(contact.id)}
                  />
                  <img
                    src={edit}
                    alt="edit"
                    onClick={() => showEditDropdown(contact.id)}
                  />
                </div>
              </li>
            </>
          ))}
          <Modal
            isOpen={dropdown}
            onRequestClose={closeEditDropdown}
            style={customStyles}
          >
            <EditModal contactId={id} />
          </Modal>
          <Modal
            isOpen={removeDropdown}
            onRequestClose={closeRemoveDropdown}
            style={customStyles}
          >
            <DeleteContact contactId={id} remove={closeRemoveDropdown} />
          </Modal>
        </Ul>
      </Main>
    </motion.div>
  );
}
