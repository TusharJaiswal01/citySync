import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
// import Collaboration from "./components/Collaboration";
// import { Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import Pricing from "./components/Pricing";
// import Roadmap from "./components/Roadmap";
// import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import WhyConnect from "./components/WhyConnect";
import ChatBot from "react-chatbotify";
import MyChatBot from './ChatBot'
const App = () => {
  return (
    <>
      <MyChatBot />
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        {/* <Router> */}
        <Header />
        <Hero />
        <Benefits />
        {/* <Collaboration /> */}
        {/* <Services /> */}
        {/* <Pricing /> */}
        <AboutUs />
        {/* <WhyConnect /> */}
        {/* <Roadmap /> */}
        <ContactUs />

        <Footer />
        {/* </Router> */}
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
