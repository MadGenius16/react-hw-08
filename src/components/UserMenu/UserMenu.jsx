import { useSelector } from "react-redux"
import { selectAuthUser } from "../../redux/auth/selectors"
import { RiUserFollowLine } from "react-icons/ri";
import css from "./UserMenu.module.css"
const UserMenu = () => {

  const user = useSelector(selectAuthUser)
  
  return (
    <div  className={css.logoutWrap}>
      <p className={css.userText}><RiUserFollowLine className={css.icon} />{user.name}</p>
      <button className={css.btnLogout} type="button">EXIT</button>
    </div>
  )
}

export default UserMenu