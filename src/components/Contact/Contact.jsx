import { FaUser } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import css from './Contact.module.css'
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsOps";
import toast from "react-hot-toast";


const Contact = ({ id, name, number}) => {
const dispatch = useDispatch()
const handleDelete = () => dispatch(deleteContact(id)).unwrap().then(()=>{toast.success("Contact deleted successfully")})

  return (
    <div className={css.container}>
      <div className={css.contactWrap}>
        <p className={css.field}><FaUser />{name}</p>
        <p className={css.field}><IoCall />{number}</p>
      </div>
      <button onClick={handleDelete} className={css.deleteBtn} type="button">Delete</button>
    </div>
  )
}

export default Contact