import { Icon } from "../Icon";

import styles from "./index.module.scss";

function GameCard() {
  return (
    <div className={styles.gameCard}>
      <img className={styles.gameCardImg} src="https://placehold.co/243x340" alt="Заглушка"></img>
      <div className={styles.gameCardInner}>
        <div className={styles.gameCardPrice}>
          $15.00 <span>$59.99</span>
        </div>
        <h3 className={styles.gameCardTitle}>Assassin's Creed Valhalla Standard Edition</h3>
        <div className={styles.gameCardPlatform}>
          <Icon className={styles.gameCardSvg} name="xbox-mini-icon" size={20} />
          <Icon className={styles.gameCardSvg} name="windows-mini-icon" size={20} />
          <Icon className={styles.gameCardSvg} name="ps-mini-icon" width={25} height={19} />
        </div>
      </div>
    </div>
  )
}

export default GameCard;