import { Icon } from "../Icon";
import products from "../../data/games.json";

import styles from "./index.module.scss";

const platformIcons: Record<
  string,
  {
    name: string;
    width: number;
    height: number;
  }
> = {
  PC: {
    name: "windows-mini-icon",
    width: 20,
    height: 20,
  },
  "PlayStation": {
    name: "ps-mini-icon",
    width: 25,
    height: 19,
  },
  "Xbox": {
    name: "xbox-mini-icon",
    width: 20,
    height: 20,
  },
};

function GameCard() {
  const lastGamesForList = products.slice(0, 6);

  return (
    <>
      {lastGamesForList.map((item) => (
        <li key={item.id}>
          <div className={styles.gameCard}>
            <img className={styles.gameCardImg} src={item.image} alt={item.title} />
            <div className={styles.gameCardInner}>
              <div className={styles.gameCardPrice}>
                {`$${item.price}`}
                {item.discountPrice && (
                  <span>{`$${item.discountPrice}`}</span>
                )}
              </div>
              <h3 className={styles.gameCardTitle}>
                {item.title}
              </h3>
              <div className={styles.gameCardPlatform}>
                {item.platforms.map((platform) => {
                  const icon = platformIcons[platform];
                  if (!icon) return null;
                  return (
                    <Icon
                      key={platform}
                      className={styles.gameCardSvg}
                      name={icon.name}
                      width={icon.width}
                      height={icon.height}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}

export default GameCard;