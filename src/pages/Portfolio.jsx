import { Helmet } from "react-helmet-async";
import PortfolioPage from "../components/PortfolioPage";

const Portfolio = () => {
  return (
    <>
      <Helmet key="portfolio" prioritizeSeoTags>
        <title>Photography Portfolio | Wedding & Event Work – DS Photography</title>
        <meta
          name="description"
          content="Explore the photography portfolio of DS Photography featuring wedding, pre-wedding and event shoots with cinematic storytelling."
        />
        <meta
          name="keywords"
          content="DS Photography portfolio, wedding photography portfolio, event photography gallery, pre wedding shoots"
        />
        <link rel="canonical" href="https://www.dsphotography.com/portfolio" />
      </Helmet>

      <div>
        <h1 className="sr-only">
          Wedding, Event & Pre-Wedding Photography Portfolio
        </h1>

        <PortfolioPage />
      </div>
    </>
  );
};

export default Portfolio;
