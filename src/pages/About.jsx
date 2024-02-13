import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../components/AboutHero";
import Team from "../components/Team";

const About = () => {
  return (
    <section>
      <Navbar />
      <AboutHero />
      <Team />
      <Footer />
    </section>
  );
};

export default About;
