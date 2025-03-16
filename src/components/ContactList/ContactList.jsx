import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import {  selectFilteredContacts } from "../../redux/contactsSlice";
// import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectNameFilter);
  // const filteredContact = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
  
  const filteredContact = useSelector(selectFilteredContacts);
  return (
    <div className={css.contactList}>
      {filteredContact.map((contact) => (
        <Contact
          id={contact.id}
          key={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </div>
  );
};

export default ContactList;
