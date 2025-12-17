import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeIntro from "../components/HomeIntro";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import CTA from "../components/CTA";
import Footer from "../components/Footer";



const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero/>
        <HomeIntro />
        <Services/>
        <Portfolio/>
        <CTA/>
        <Footer />
    </div>
  )
}

export default Home