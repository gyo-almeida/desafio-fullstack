import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";
import { User } from "../../providers/AuthProvider";

interface Contact {
  id: string;
  name: string;
  cellPhone: string;
  createdAt: string;
  email: string;
}

export function Dashboard() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const { user, setUser } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await api.get<Contact[]>("contacts");
      const user = localStorage.getItem("contactsList:@USER");

      setUser(JSON.parse(user));

      setContacts(response.data);
    })();
  }, [setUser]);

  return (
    <>
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
      <p>{user?.cellPhone}</p>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.cellPhone}</p>
            <p>{contact.email}</p>
            <p>{contact.createdAt}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
