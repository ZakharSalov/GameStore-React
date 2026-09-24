import { Icon } from "../../components/Icon";

import styles from "./index.module.scss";

function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.contactTop}>
        <div className="container">
          <h2 className={styles.contactTopTitle}>Need help?</h2>
          <p className={styles.contactTopText}>
            Check the links bellow or get in touch with use using the form.
          </p>
          <div className={styles.advantages}>
            <div className={styles.advantagesItem}>
              <Icon className={styles.advantagesSvg} name="game-support" size={48} />
              <span className={styles.advantagesText}>Game Support</span>
            </div>
            <div className={styles.advantagesItem}>
              <Icon className={styles.advantagesSvg} name="store-support" size={48} />
              <span className={styles.advantagesText}>Store Support</span>
            </div>
            <div className={styles.advantagesItem}>
              <Icon className={styles.advantagesSvg} name="job-support" size={48} />
              <span className={styles.advantagesText}>Job Application Support</span>
            </div>
            <div className={styles.advantagesItem}>
              <Icon className={styles.advantagesSvg} name="gs-support" size={48} />
              <span className={styles.advantagesText}>GS Discord</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.contactInner}>
          <h2 className={styles.contactTitle}>Contact Us</h2>
          <p className={styles.contactText}>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
          </p>
          <form className={styles.contactForm}>
            <Icon className={styles.contactSvg} name="form-icon" size={48} />
            <div className={styles.contactInputs}>
              <div className={styles.customInput}>
                <label className={styles.contactLabel} htmlFor="problem">Select the category</label>
                <select className={styles.contactInput} name="problem" id="problem">
                  <option value="general-problems">General Problems</option>
                </select>
              </div>
              <div className={styles.customInput}>
                <label className={styles.contactLabel} htmlFor="email">Your email</label>
                <input className={styles.contactInput} type="email" id="email" required />
              </div>
              <div className={styles.customInput}>
                <label className={styles.contactLabel} htmlFor="name">Your name</label>
                <input className={styles.contactInput} type="name" id="name" required />
              </div>
              <div className={styles.customInput}>
                <label className={styles.contactLabel} htmlFor="describe">Describe the problem</label>
                <textarea className={styles.contactTextarea} name="describe" id="describe" required></textarea>
              </div>
            </div>
            <button className={`btn ${styles.contactBtn}`}>Send Message</button>
            <span className={styles.contactWarning}>Thank you for your message. We will get in touch soon by email.</span>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;