import { Helmet } from "react-helmet-async";
import PackagesPage from "../components/PackagePage";

const Packages = () => {
  return (
    <>
      <Helmet key="packages" prioritizeSeoTags>
        <title>Photography Packages & Pricing | DS Photography</title>
        <meta
          name="description"
          content="Explore affordable wedding, pre-wedding and event photography packages by DS Photography. Transparent pricing, premium quality and professional service."
        />
        <meta
          name="keywords"
          content="DS Photography packages, wedding photography pricing, event photography packages, pre wedding photography cost"
        />
        <link rel="canonical" href="https://www.dsphotography.com/packages" />
      </Helmet>

      <div>
        <h1 className="sr-only">
          Photography Packages & Pricing by DS Photography
        </h1>

        <PackagesPage />
      </div>
    </>
  );
};

export default Packages;

