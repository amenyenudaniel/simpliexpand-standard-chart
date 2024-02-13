import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlobalOutlookHero from "../components/GlobalOutlookHero";
import Scan from "../components/Scan";

const GlobalOutlook = () => {
  return (
    <section>
      <Navbar />
      <GlobalOutlookHero />
      <Scan />
      <Footer />
    </section>
  );
};

export default GlobalOutlook;
