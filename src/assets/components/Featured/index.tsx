import GameCard from "../GameCard";

import styles from "./index.module.scss";

function Featured() {
  return (
    <section className={styles.featured}>
      <div className="container">
        <div className={styles.featuredInner}>
          <h2 className={`title`}>Featured Games</h2>
          <p className={styles.featuredText}>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
          </p>
        </div>
        <ul className={styles.featuredList}>
          <li className={styles.featuredItem}>
            <GameCard />
          </li>
          <li className={styles.featuredItem}>
            <GameCard />
          </li>
          <li className={styles.featuredItem}>
            <GameCard />
          </li>
          <li className={styles.featuredItem}>
            <GameCard />
          </li>
          <li className={styles.featuredItem}>
            <GameCard />
          </li>
          <li className={styles.featuredItem}>
            <GameCard />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Featured;