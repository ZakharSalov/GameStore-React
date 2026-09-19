import styles from "./index.module.scss";

function FaqItem() {
  return (
    <div className={styles.faq}>
      <h3 className={styles.faqTitle}>
        Suspendisse in velit quis ex faucibus
        <span>+</span>
      </h3>
      <p className={styles.faqText}>
        Suspendisse in velit quis ex faucibus vestibulum ut eu sem. Maecenas semper dui massa, ut aliquam orci facilisis non. Duis tempus volutpat nibh. Aliquam ac ante dolor.
      </p>
    </div>
  )
}

export default FaqItem;