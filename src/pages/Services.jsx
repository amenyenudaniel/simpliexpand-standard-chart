import React from "react";
import Navbar from "../components/Navbar";
import Scan from "../components/Scan";
import Footer from "../components/Footer";
import ServiceHero from "../components/ServiceHero";
import Products from "../components/Products";
import Grid from "../components/Grid";

const Services = () => {
  return (
    <section>
      <Navbar />
      <ServiceHero />
      <Products />
      <Scan />
      <Grid />
      <Footer />
    </section>
  );
};

export default Services;
