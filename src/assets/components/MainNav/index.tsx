import { NavLink } from "react-router-dom";

<<<<<<< HEAD
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
=======
function MainNav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shop">Store</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/support">Support</NavLink>
      <NavLink to="/contact">Contact</NavLink>
>>>>>>> 4280d38601138dbe5c4b1654018cec4465661ae5
    </nav>
  )
}

export default MainNav;