import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../components/AboutHero";
import Team from "../components/Team";
import TeamB from "../components/TeamB";
import TeamC from "../components/TeamC";

const About = () => {
  return (
    <section>
      <Navbar />
      <AboutHero />
      <Team />
      <TeamB />
      <TeamC />
      <Footer />
    </section>
  );
};

export default About;
