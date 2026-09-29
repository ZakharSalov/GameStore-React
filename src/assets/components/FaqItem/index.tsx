import { useState } from "react";
import faqData from "../../data/faqData.json";

import styles from "./index.module.scss";

function FaqItem() {
  const [faqText, setFaqText] = useState<number | null>(null);

  const openFaqItem = (index: number) => {
    setFaqText(faqText === index ? null : index);
  };

  return (
    <>
      {faqData.map((item, index) => (
        <div className={styles.faq} key={index} onClick={() => openFaqItem(index)}>
          <h3 className={styles.faqTitle}>
            {item.question}
            <span>
              {faqText === index ? "-" : "+"}
            </span>
          </h3>
          <div className={`${styles.faqAnswer} ${faqText === index ? styles.open : ""}`}>
            <div className={styles.faqAnswerInner}>
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default FaqItem;