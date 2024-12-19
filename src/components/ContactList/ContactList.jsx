import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <ul className={style.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={style.item} key={id}>
            <Contact name={name} number={number} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
