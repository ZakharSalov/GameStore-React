import LatestNewsCard from "../LatestNewsCard";

import styles from "./index.module.scss";

function LatestNews() {
  return (
    <section className={styles.latestNews}>
      <div className="container">
        <h2 className={styles.latestNewsTitle}>Latest News</h2>
        <p className={styles.latestNewsText}>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
        </p>
        <ul className={styles.latestNewsList}>
          <li className={styles.latestNewsItem}>
            <LatestNewsCard />
          </li>
          <li className={styles.latestNewsItem}>
            <LatestNewsCard />
          </li>
          <li className={styles.latestNewsItem}>
            <LatestNewsCard />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default LatestNews;