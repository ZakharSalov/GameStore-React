import styles from "./index.module.scss";

function Subscribe() {
  return (
    <section className={styles.subscribe}>
      <div className="container">
        <div className={styles.subscribeInner}>
          <h1 className={styles.subscribeTitle}>
            <span>Subscribe</span> to the Games Store Email List
          </h1>
          <p className={styles.subscribeText}>
            Sign up for our email newsletter to get info on game announcements and updates, details on special events and offers, and more from Games Store and our affiliates.
          </p>
        </div>
          <form className={styles.subscribeForm} method="POST">
            <input className={styles.subscribeInput} type="name" placeholder="Your Name" required />
            <input className={styles.subscribeInput} type="email" placeholder="Your Email" required />
            <button className={styles.subscribeBtn}>Subscribe</button>
          </form>
      </div>
    </section>
  )
}

export default Subscribe;