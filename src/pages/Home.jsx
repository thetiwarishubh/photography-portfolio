import Hero from "../components/Hero";
import HomeIntro from "../components/HomeIntro";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import FeaturedWork from "../components/FeaturedWork";
import WhyChooseUs from "../components/WhyChooseUs";
import ClientReviews from "../components/ClientReviews";
import CTA from "../components/CTA";



const Home = () => {
  return (
    <div>
        <Hero/>
        <HomeIntro />
        <Services />
        <FeaturedWork />
        <Portfolio/>
        <WhyChooseUs />
        <CTA/>
    </div>
  )
}

export default Home