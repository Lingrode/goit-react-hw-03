import { useState } from "react";
import style from "./App.module.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

const contactsList = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [contacts, setContacts] = useState(contactsList);
  const [filter, setFilter] = useState("");

  const addContact = {};

  const filteredTasks = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={style.container}>
      <h1>Phonebook</h1>
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filteredTasks} />
    </div>
  );
};

export default App;
