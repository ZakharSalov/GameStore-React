import { Icon } from "../Icon";

import styles from "./index.module.scss";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>
            Holiday Sale! <span>30% off</span> for All Action Games
          </h1>
          <p className={styles.heroText}>
            Save. Play. Celebrate. Ends 1/17
          </p>
          <button className={`btn ${styles.heroBtn}`}>
            <Icon className={styles.heroBtnSvg} name="document-icon" size={24} />
            Download & Save Now
          </button>
        </div>
        <ul className={styles.heroCompanysList}>
          <li className={styles.heroCompanysItem}>
            <Icon className={styles.heroCompanysSvg} name="ubisoft-logo" width={57} height={48} />
          </li>
          <li className={styles.heroCompanysItem}>
            <Icon className={styles.heroCompanysSvg} name="xbox-logo" width={163} height={48} />
          </li>
          <li className={styles.heroCompanysItem}>
            <Icon className={styles.heroCompanysSvg} name="ps-logo" width={57} height={48} />
          </li>
          <li className={styles.heroCompanysItem}>
            <Icon className={styles.heroCompanysSvg} name="activision-logo" width={192} height={48} />
          </li>
          <li className={styles.heroCompanysItem}>
            <Icon className={styles.heroCompanysSvg} name="ea-logo" width={84} height={48} />
          </li>
          <li className={styles.heroCompanysItem}>
            <Icon className={styles.heroCompanysSvg} name="quiche-logo" width={113} height={48} />
          </li>
          <li className={styles.heroCompanysItem}>
            <Icon className={styles.heroCompanysSvg} name="rockstar-logo" width={57} height={48} />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Hero;