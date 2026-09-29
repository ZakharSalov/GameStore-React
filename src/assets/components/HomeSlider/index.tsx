import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom";

import 'swiper/css';
import 'swiper/css/autoplay';

import products from "../../data/games.json";
import styles from "./index.module.scss";
import { useState } from 'react';

function HomeSlider() {
  const [games, setGames] = useState(products);

  const showGamesInSlider = games.slice(-8);

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
      {showGamesInSlider.map(item => (
        <SwiperSlide key={item.id}>
          <Link to="/">
            <img className={styles.sliderImg} src={item.image} alt={item.title} width={267} height={403} />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default HomeSlider;