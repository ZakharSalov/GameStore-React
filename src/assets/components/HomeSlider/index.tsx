import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

import styles from "./index.module.scss";

function HomeSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      slidesPerView={7} // Количество видимых слайдов
      spaceBetween={8} // Расстояние между слайдами
      speed={3000} // Скорость анимации перехода (в мс)
      autoplay={{
        delay: 1000, // Нулевая задержка между переходами
        disableOnInteraction: false, // Не останавливать при свайпе
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <img className={styles.sliderImg} src="https://placehold.co/267x403" alt="Заглушка"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.sliderImg} src="https://placehold.co/267x403" alt="Заглушка"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.sliderImg} src="https://placehold.co/267x403" alt="Заглушка"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.sliderImg} src="https://placehold.co/267x403" alt="Заглушка"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.sliderImg} src="https://placehold.co/267x403" alt="Заглушка"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.sliderImg} src="https://placehold.co/267x403" alt="Заглушка"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.sliderImg} src="https://placehold.co/267x403" alt="Заглушка"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.sliderImg} src="https://placehold.co/267x403" alt="Заглушка"></img>
      </SwiperSlide>
    </Swiper>
  )
}

export default HomeSlider;