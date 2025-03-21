import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm"
import ContactList from "../../components/ContactList/ContactList"
import SearchBox from "../../components/SearchBox/SearchBox"
import { fetchContacts } from "../../redux/contacts/contactsOps";
import { useEffect } from "react";
import { selectError, selectLoading } from "../../redux/contacts/contactsSelectors";
import toast from "react-hot-toast";


const ContactsPage = () => {

  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts()).unwrap().then(() => {
      toast.success("Contacts loaded successfully");
    });
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