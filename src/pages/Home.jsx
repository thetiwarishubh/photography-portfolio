import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeIntro from "../components/HomeIntro";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import FeaturedWork from "../components/FeaturedWork";
import WhyChooseUs from "../components/WhyChooseUs";
import ClientReviews from "../components/ClientReviews";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";



const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero/>
        <HomeIntro />
        <Services />
        <FeaturedWork />
        <Portfolio/>
        <WhyChooseUs />
        <CTA/>
        <Footer />
        <WhatsAppButton />
    </div>
  )
}

export default Home