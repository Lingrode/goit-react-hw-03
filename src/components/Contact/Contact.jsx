import { FaUser, FaPhoneAlt } from "react-icons/fa";

import style from "./Contact.module.css";

const Contact = ({ name, number }) => {
  return (
    <div className={style.card}>
      <div className={style.wrapper}>
        <div className={style.name}>
          <FaUser />
          <p>{name}</p>
        </div>
        <div className={style.number}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>
      <button className={style.btn}>Delete</button>
    </div>
  );
};

export default Contact;
