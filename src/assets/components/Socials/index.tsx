import { Link } from "react-router-dom";
import { Icon } from "../Icon";

import styles from "./index.module.scss";

function Socials() {
  return (
    <ul className={styles.socials}>
      <li className={styles.socialsItem}>
        <Link className={styles.socialsLink} to="/">
          <Icon className={styles.socialsSvg} name="twitter-logo" size={24} />
        </Link>
      </li>
      <li className={styles.socialsItem}>
        <Link className={styles.socialsLink} to="/">
          <Icon className={styles.socialsSvg} name="telegram-logo" size={24} />
        </Link>
      </li>
      <li className={styles.socialsItem}>
        <Link className={styles.socialsLink} to="/">
          <Icon className={styles.socialsSvg} name="medium-logo" size={24} />
        </Link>
      </li>
      <li className={styles.socialsItem}>
        <Link className={styles.socialsLink} to="/">
          <Icon className={styles.socialsSvg} name="insta-logo" size={24} />
        </Link>
      </li>
      <li className={styles.socialsItem}>
        <Link className={styles.socialsLink} to="/">
          <Icon className={styles.socialsSvg} name="discord-logo" size={24} />
        </Link>
      </li>
    </ul>
  )
}

export default Socials;