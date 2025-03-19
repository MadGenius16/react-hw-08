import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  const buildLinkClass = ({ isActive }) =>
    clsx(css.link, isActive && css.isActive);

  return (
    <ul className={css.list}>
      <li>
        <NavLink className={buildLinkClass} to="/register">
          register
        </NavLink>
      </li>
      <li>
        <NavLink className={buildLinkClass} to="/login">
          login
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
