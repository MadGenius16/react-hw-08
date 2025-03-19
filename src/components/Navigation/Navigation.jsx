import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  const buildLinkClass = ({ isActive }) =>
    clsx(css.link, isActive && css.isActive);

  return (
    <ul className={css.list}>
      <li>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
      </li>
      {isLoggedIn &&<li>
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
      </li>}
    </ul>
  );
};

export default Navigation;
