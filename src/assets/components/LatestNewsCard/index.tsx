import { Link } from "react-router-dom";
import { Icon } from "../Icon";

import newsList from "../../data/news.json";
import styles from "./index.module.scss";
import { useState } from "react";

function LatestNewsCard() {
  const [news, useNews] = useState(newsList);

  const latestNewsPosts = news.slice(0, 3);

  return (
    <>
      {latestNewsPosts.map(item => (
        <li className={styles.card} key={item.id}>
          <h3 className={styles.cardTitle}>
            {item.title}
          </h3>
          <img className={styles.cardImg} src={item.image} alt="Картинка новости" width={481} height={328} />
          <p className={styles.cardText}>
            {item.shortDescription}
          </p>
          <Link className={`btn ${styles.cardBtn}`} to={item.link}>
            <Icon className={styles.cardBtnSvg} name="document-mini-icon" size={24} />
            Open the post
          </Link>
        </li>
      ))}
    </>
  )
}

export default LatestNewsCard;