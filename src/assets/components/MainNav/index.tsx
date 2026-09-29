import { NavLink } from "react-router-dom";

import styles from "./index.module.scss";

function MainNav() {
  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Store", path: "/shop" },
    { title: "Services", path: "/services" },
    { title: "News", path: "/news" },
    { title: "Support", path: "/support" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav className={styles.mainNav}>
      <ul className={styles.mainNavList}>
        {menuItems.map((item) => (
          <li className={styles.mainNavItem} key={item.path}>
            <NavLink className={styles.mainNavLink} to={item.path}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MainNav;