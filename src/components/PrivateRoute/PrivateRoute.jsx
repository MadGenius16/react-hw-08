import { Navigate } from "react-router-dom";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors"
import { useSelector } from "react-redux";


export const PrivateRoute = ({component, redirectTo= "/login"}) => {
 const isLoggedIn = useSelector(selectAuthIsLoggedIn);
 return isLoggedIn ? component : <Navigate to={redirectTo} replace /> 
}