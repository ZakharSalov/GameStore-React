import { NavLink } from "react-router-dom";

import MainNav from "../MainNav";
import { Icon } from "../Icon";

import styles from "./index.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerInner}>
          <div className={styles.headerLeft}>
            <NavLink className={styles.headerLogo} to="/">
              <Icon className={styles.headerLogoSvg} name="header-logo" width={196} height={29} />
            </NavLink>
            <MainNav /> 
          </div>
          <div className={styles.headerRight}>
            <button className={styles.headerBtn}>
              <Icon className={styles.headerBtnSvg} name="search-icon" size={36} />
            </button>
            <button className={styles.headerBtn}>
              <Icon className={styles.headerBtnSvg} name="theme-icon" size={36} />
            </button>
            <NavLink to="/cart" className={styles.headerBtn}>
              <Icon className={styles.headerBtnSvg} name="cart-icon" size={36} />
            </NavLink>
            <button className={styles.headerBtnMember}>
              Member Area
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;