import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FundHero from "../components/FundHero";
import FundsData from "../components/FundsData";
import Disclaimer from "../components/Disclaimer";

const FundLibrary = () => {
  return (
    <section>
      <Navbar />
      <FundHero />
      <FundsData />
      <Disclaimer />
      <Footer />
    </section>
  );
};

export default FundLibrary;
