import { Helmet } from "react-helmet-async";
import AboutPage from "../components/AboutPage";

const About = () => {
  return (
    <>
      <Helmet key="about" prioritizeSeoTags>
        <title>About DS Photography | Professional Wedding Photographer</title>
        <meta
          name="description"
          content="Learn more about DS Photography – a professional wedding and event photography brand delivering cinematic storytelling and timeless memories."
        />
        <meta
          name="keywords"
          content="About DS Photography, professional photographer, wedding photographer, event photographer"
        />
        <link rel="canonical" href="https://www.dsphotography.com/about" />
      </Helmet>

      <div>
        <h1 className="sr-only">
          About DS Photography – Wedding & Event Photography Experts
        </h1>

        <AboutPage />
      </div>
    </>
  );
};

export default About;
