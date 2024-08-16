import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css"; // Імпортуємо стилі

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function Navigation() {
  return (
    <nav className={css.navbar}>
      <ul className={css.navButton}>
        <li>
          <NavLink to="/" end className={buildLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalog" className={buildLinkClass}>
            Catalog
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites" className={buildLinkClass}>
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
