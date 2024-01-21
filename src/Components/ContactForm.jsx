import Button from "./Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import { useState } from "react";
const ContactForm = () => {
  const [name, setName] = useState("Rahul");
  const [Email, setEmail] = useState("rsingh81158@gmail.com");
  const [Message, setMessage] = useState(
    "Follow me on github for more project"
  );

  const onSubmit = (event) => {
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setMessage(event.target[2].value);
    // console.log(event);
    event.preventDefault();

    // console.log("name",event.target[0].value);
    // console.log("Email",event.target[1].value);
    // console.log("Message",event.target[2].value);
  };

  return (
    <section className={styles.container_form}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhone fontSize="24px" />} />
        </div>
        <Button
          isOutLine={true}
          text="VIA MAIL FORM"
          icon={<IoMdMailUnread fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_controler}>
            <label htmlFor="name">name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_controler}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>
          <div className={styles.form_controler}>
            <label htmlFor="email">Message</label>
            <textarea name="message" id="" cols="30" rows="10"></textarea>
          </div>

          <div className={styles.submit_btn}>
            <Button text="SUBMIT FORM" />
          </div>

          <div className={styles.msg}>{name + " " + Email + " " + Message}</div>
        </form>
      </div>

      <div className={styles.contact_img}>
        <img src="/images/smmm.png" alt="call me 24/7" />
      </div>
    </section>
  );
};
export default ContactForm;
