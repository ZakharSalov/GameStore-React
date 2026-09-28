import { Icon } from "../../components/Icon";
import Socials from "../../components/Socials";

import styles from "./index.module.scss";

function NewsPost() {
  return (
    <section className={styles.newsPost}>
      <div className={styles.newsPostTop}>
        <div className="container">
          <h1 className={styles.newsPostTitle}>
            Assassins’ Creed Mirage is Now Enhanced for PlayStation Pro – Here’s What to Expect
          </h1>
          <div className={styles.newsPostInform}>
            <span>
              <Icon name="calendar-icon" size={24} />
              November 7, 2024
            </span>
            <span>
              <Icon name="user-author-icon" size={24} />
              Youssef Maguid
            </span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.newsPostInner}>
          <aside>
            <span>Share</span>
            <Socials gap={8} />
          </aside>
          <div>
            <div className={styles.newsPostText}>
              <p>
                A year after it debuted on PS4 and PS5, Ubisoft Bordeaux is excited to release a patch to enhance Assassin's Creed Mirage on the PlayStation 5 Pro. If you managed to snag Sony's latest console, here's what to expect:
              </p>
              <ul>
                <li>4K 60 FPS with PSSR as an upsampling algorithm, for more faithful 4K details at 60 FPS.</li>
                <li>'Quality Mode' is now the default setting at 60 FPS (vs 30 FPS for the classic PS5 version).</li>
                <li>Generally improved graphics, with better shadows and reflection fidelity, higher texture resolution, and generally improved draw distance (quality, details).</li>
              </ul>
              <p>
                In Assassin's Creed Mirage, you are Basim, a cunning street thief with nightmarish visions, seeking answers and justice. After an act of deadly retribution, Basim flees Baghdad and joins an ancient organization - The Hidden Ones. As he learns their mysterious rituals and powerful tenets, he will hone his unique abilities, discover his true nature, and come to understand a new Creed - one that will change his fate in ways he never could have imagined.
                You can pick up Assassin's Creed Mirage on PS5, PS4, Xbox Series X|S, Xbox One, PC (via the Ubisoft Store, Steam and  Epic Games Store), Amazon Luna, and iOS, or with a Ubisoft+ premium subscription.
              </p>
            </div>
            <img className={styles.newsPostImg} src="/images/news-post/latest-news-bg.jpg" alt="Картинка" />
            <div className={styles.newsPostText}>
              <p>
                In Assassin's Creed Mirage, you are Basim, a cunning street thief with nightmarish visions, seeking answers and justice. After an act of deadly retribution, Basim flees Baghdad and joins an ancient organization - The Hidden Ones. As he learns their mysterious rituals and powerful tenets, he will hone his unique abilities, discover his true nature, and come to understand a new Creed - one that will change his fate in ways he never could have imagined.
              </p>
              <p>
                A year after it debuted on PS4 and PS5, Ubisoft Bordeaux is excited to release a patch to enhance Assassin's Creed Mirage on the PlayStation 5 Pro. If you managed to snag Sony's latest console, here's what to expect:
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsPost;