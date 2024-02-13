import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Explore from "../components/Explore";
import Accordion from "../components/Accordion";
import Scan from "../components/Scan";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Explore />
      <Accordion />
      <Scan />
      <Footer />
    </div>
  );
};

export default Home;
