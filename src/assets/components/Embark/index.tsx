import styles from "./index.module.scss";

function Embark() {
  return (
    <section className={styles.embark}>
      <div className="container">
        <div className={styles.embarkInner}>
          <h2 className={styles.embarkTitle}>Embark On High-Stakes Missions</h2>
          <p className={styles.embarkText}>
            Take on high-risk, high-reward missions from the galaxy’s crime syndicates. Steal valuable goods, infiltrate secret locations, and outwit enemies as one of the galaxy’s most wanted. Every choice you make influences your ever-changing reputation.
          </p>
          <div className={styles.embarkBtns}>
            <button className={styles.embarkBtn}>Game Store</button>
            <button className={styles.embarkBtn}>Services</button>
            <button className={styles.embarkBtn}>Downloads</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Embark;