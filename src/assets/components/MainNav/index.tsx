import { NavLink } from "react-router-dom";

import styles from "./index.module.scss";

function MainNav() {
  return (
    <nav className={styles.mainNav}>
      <ul className={styles.mainNavList}>
        <li className={styles.mainNavItem}>
          <NavLink className={styles.mainNavLink} to="/">Home</NavLink>
        </li>
        <li className={styles.mainNavItem}>
          <NavLink className={styles.mainNavLink} to="/shop">Store</NavLink>
        </li>
        <li className={styles.mainNavItem}>
          <NavLink className={styles.mainNavLink} to="/services">Services</NavLink>
        </li>
        <li className={styles.mainNavItem}>
          <NavLink className={styles.mainNavLink} to="/news">News</NavLink>
        </li>
        <li className={styles.mainNavItem}>
          <NavLink className={styles.mainNavLink} to="/support">Support</NavLink>
        </li>
        <li className={styles.mainNavItem}>
          <NavLink className={styles.mainNavLink} to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav;