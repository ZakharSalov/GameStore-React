import { Link } from "react-router-dom";
import { Icon } from "../Icon";

import styles from "./index.module.scss";
import Socials from "../Socials";
import FaqItem from "../FaqItem";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerWrapper}>
          <div className={styles.footerInner}>
            <div className={styles.footerLeft}>
              <Link className={styles.footerLogo} to="/">
                <Icon className={styles.footerLogoSvg} name="footer-logo" width={61} height={42} />
              </Link>
              <p className={styles.footerText}>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
              </p>
              <Socials />
            </div>
            <div className={styles.footerRight}>
              <FaqItem />
              <FaqItem />
              <FaqItem />
            </div>
          </div>
          <div className={styles.footerCopy}>
            <div className={styles.footerCopyLeft}>
              <p className={styles.footerCopyText}>
                Copyright ©2022 All rights reserved.
              </p>
              <div className={styles.footerPeyments}>
                <Icon className={styles.footerCopySvg} name="visa-icon" width={48} height={18} />
                <Icon className={styles.footerCopySvg} name="mastercard-icon" width={30} height={18} />
                <Icon className={styles.footerCopySvg} name="paypal-icon" width={63} height={18} />
                <Icon className={styles.footerCopySvg} name="bitcoin-icon" width={18} height={18} />
              </div>
            </div>
            <div className={styles.footerCopyRight}>
              <Link className={styles.footerCopyLink} to="/">Terms and conditions</Link>
              <Link className={styles.footerCopyLink} to="/">Privacy policy</Link>
              <Link className={styles.footerCopyLink} to="/">Login / Signup</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;