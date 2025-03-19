import { useSelector } from "react-redux"
import { selectAuthUser } from "../../redux/auth/selectors"


const UserMenu = () => {

  const user = useSelector(selectAuthUser)
  
  return (
    <div>
      <p>{user.name}</p>
      <button type="button">EXIT</button>
    </div>
  )
}

export default UserMenu