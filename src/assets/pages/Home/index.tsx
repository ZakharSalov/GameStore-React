import Embark from "../../components/Embark";
import Featured from "../../components/Featured";
import Hero from "../../components/Hero";
import HomeSlider from "../../components/HomeSlider";
import LatestNews from "../../components/LatestNews";
import Subscribe from "../../components/Subscribe";

function Home() {
  return (
    <>
      <Hero />
      <HomeSlider />
      <LatestNews />
      <Subscribe />
      <Featured />
      <Embark />
    </>
  )
}

export default Home;