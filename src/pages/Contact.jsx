import { Helmet } from "react-helmet-async";
import ContactPage from "../components/ContactPage";

const Contact = () => {
  return (
    <>
      {/* SEO */}
      <Helmet key="contact" prioritizeSeoTags>
        <title>Contact DS Photography | Book Wedding & Event Photography</title>
        <meta
          name="description"
          content="Contact DS Photography to book professional wedding, event and cinematic photography services. Get in touch for packages, pricing and availability."
        />
        <meta
          name="keywords"
          content="Contact DS Photography, wedding photographer contact, event photography booking, photography packages"
        />
        <link rel="canonical" href="https://www.dsphotography.com/contact" />
      </Helmet>

      {/* Page Content */}
      <div>
        {/* Only ONE H1 for SEO */}
        <h1 className="sr-only">
          Contact DS Photography – Book Your Photography Session
        </h1>

        <ContactPage />
      </div>
    </>
  );
};

export default Contact;
