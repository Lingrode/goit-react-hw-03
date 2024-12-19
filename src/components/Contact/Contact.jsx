import style from "./Contact.module.css";
import phone from "../../assets/phone.svg";
import user from "../../assets/user-filled.svg";

const Contact = ({ name, number }) => {
  return (
    <div className={style.card}>
      <div className={style.wrapper}>
        <div className={style.name}>
          <img src={user} alt="" />
          <p>{name}</p>
        </div>
        <div className={style.number}>
          <img src={phone} alt="" />
          <p>{number}</p>
        </div>
      </div>
      <button className={style.btn}>Delete</button>
    </div>
  );
};

export default Contact;
