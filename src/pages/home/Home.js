import React from "react";
import "./home.css";
import MainHeader from "../../components/MainHeader";
import Programs from "../../components/Programs";
import Values from "../../components/Values";
import Faqs from "../../components/Faqs";
import Testimonials from "../../components/Testimonials";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <MainHeader />
      <Programs />
      <Values />
      <Faqs />
      <Testimonials />
      <Footer />
    </div>
  );
};
export default Home;
