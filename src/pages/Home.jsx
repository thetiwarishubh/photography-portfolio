import { Helmet } from "react-helmet-async";

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
    <>
      <Helmet key="home" prioritizeSeoTags>
        <title>DS Photography | Wedding, Event & Cinematic Photography</title>
        <meta
          name="description"
          content="DS Photography offers professional wedding, pre-wedding, event and cinematic photography services. Capture your moments with creative storytelling."
        />
        <meta
          name="keywords"
          content="DS Photography, wedding photography, event photography, pre wedding shoot, cinematic photography"
        />
        <link rel="canonical" href="https://www.dsphotography.com/" />
      </Helmet>

      <div>
        <h1 className="sr-only">
          Professional Wedding & Event Photography by DS Photography
        </h1>

        <Hero />
        <HomeIntro />
        <Services />
        <FeaturedWork />
        <Portfolio />
        <WhyChooseUs />
        <CTA />
      </div>
    </>
  );
};

export default Home;
