import React from "react";
import Header from "../components/header/Header";
import Services from "../components/services/Services";
import Portfolios from "../components/portfolios/Portfolios";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Services />
      <Portfolios />
      <Footer/>
    </div>
  );
};

export default Home;
