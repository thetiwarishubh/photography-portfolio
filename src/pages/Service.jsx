import { Helmet } from "react-helmet-async";
import ServicesPage from "../components/ServicePage";

const Service = () => {
  return (
    <>
      {/* SEO */}
      <Helmet key="services" prioritizeSeoTags>
        <title>Photography Services | Wedding, Event & Pre-Wedding – DS Photography</title>
        <meta
          name="description"
          content="DS Photography offers professional wedding, pre-wedding, event and cinematic photography services with creative storytelling."
        />
        <meta
          name="keywords"
          content="photography services, wedding photography services, event photography, pre wedding shoot, cinematic photography"
        />
        <link rel="canonical" href="https://www.dsphotography.com/services" />
      </Helmet>

      {/* Page Content */}
      <div>
        {/* Only ONE H1 for SEO */}
        <h1 className="sr-only">
          Professional Wedding, Event & Cinematic Photography Services
        </h1>

        <ServicesPage />
      </div>
    </>
  );
};

export default Service;
