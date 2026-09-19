import { NavLink } from "react-router-dom";

import styles from "./index.module.scss";

function NotFound() {
  return (
    <section className={styles.notFound}>
      <div className="container">
        <div className={styles.notFoundInner}>
          <h2 className={styles.notFoundTitle}>Page Not Found</h2>
          <p className={styles.notFoundText}>
            Oops! This page is missing, but our games collection isn't. Dive in and find your next game!
          </p>
          <img className={styles.notFoundImg} src="/images/not-found/404.png" alt="not found page" width={931} height={359} />
          <NavLink className={`btn ${styles.notFoundLink}`} to="/">go back</NavLink>
        </div>
      </div>
    </section>
  )
}

export default NotFound;