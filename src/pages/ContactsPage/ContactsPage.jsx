import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm"
import ContactList from "../../components/ContactList/ContactList"
import SearchBox from "../../components/SearchBox/SearchBox"
import { selectError, selectLoading } from "../../redux/contacts/contactsSlice";
import { fetchContacts } from "../../redux/contacts/contactsOps";
import { useEffect } from "react";


const ContactsPage = () => {

  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
         <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && !error && <b>Loading...</b>}
      <ContactList />
    </div>
  )
}

export default ContactsPage