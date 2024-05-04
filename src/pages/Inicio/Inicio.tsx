import './Inicio.scss'
import Banner from "@/components/Banner/Banner";
import BannerImg from "@/assets/img/banner-img.png";
import PositionCard from "@/components/PositionCard/PositionCard";
import BtnAddProject from '@/components/BtnAddProject/BtnAddProject';

const bannerData = {
  image: BannerImg,
  url: "/",
  message:
    "Ya esta casi esta lista la version 4.0 su lanzamiento sera en 7 dias, estos son los cambios",
};

export default function Inicio() {
  return (
    <>
      <Banner
        image={bannerData.image}
        url={bannerData.url}
        message={bannerData.message}
      />

      <section className="main">
        <h2>Mis Busquedas</h2>
        <div className="positionGroups">
          <PositionCard />
          <PositionCard />
          <PositionCard />
          <PositionCard />
        </div>
      </section>
      <BtnAddProject/>
    </>
  )
}
