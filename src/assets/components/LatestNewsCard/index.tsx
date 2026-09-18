import { Link } from "react-router-dom";
import { Icon } from "../Icon";

import styles from "./index.module.scss";

function LatestNewsCard() {
  return (
    <>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>
          Get Your First Month of Ubisoft+ Classics for $1
        </h3>
        <img className={styles.cardImg} src="https://placehold.co/481x328" alt="Заглушка"></img>
        <p className={styles.cardText}>
          Play some of these beloved games without breaking the bank! From now until January 2, new subscribers can get their first month of Ubisoft+ Classics for just $1 USD.
        </p>
        <Link className={`btn ${styles.cardBtn}`} to="/news:slug">
          <Icon className={styles.cardBtnSvg} name="document-mini-icon" size={24} />
          Open the post
        </Link>
      </div>
    </>
  )
}

export default LatestNewsCard;