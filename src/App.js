import React, { useState } from "react";
import Carousel from "./Components/carousel";
import CarouselThumbs from "./Components/carouselThumbs";
import WhyUs from "./Components/whyUs";
import Services from "./Components/servicesOffered";
import Team from "./Components/team";
import VisionMission from "./Components/visionMission";
import Navbar from "./Components/navbar";
import JDAFooter from "./Components/Footer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./icofont/icofont.min.css";
function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="App">
      <Navbar />
      <Carousel activeIndex={activeIndex} />
      <CarouselThumbs setActiveIndex={setActiveIndex} />
      <WhyUs />
      <Services />
      <VisionMission />
      <Team />
      <JDAFooter />
    </div>
  );
}

export default App;
