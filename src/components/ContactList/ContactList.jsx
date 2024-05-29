import { useSelector } from "react-redux";
import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  if (!contacts.length) {
    return <h1 className={s.title}> No contacts</h1>;
  }

  return (
    <ul className={s.contacts_list}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
};

export default ContactList;
