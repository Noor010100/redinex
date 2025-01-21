import HeroSection from "./components/hero-section";
import HomeAbout from "./components/home-about";
import HomeContact from "./components/home-contact";
import HomeProject from "./components/home-project";
import HomeService from "./components/home-service";
import Whatsapp from "./components/whatsapp";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
    <HomeAbout />
    <HomeService />
    <HomeProject />
    <HomeContact />
     
     <Whatsapp />
     
    </div>
  );
}