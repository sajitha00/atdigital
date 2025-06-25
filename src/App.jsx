import React from "react";
import Navbar from "./components/NavBar";
import HeroSection from "./pages/Hero";
import Services from "./pages/Services";
import Freq from "./pages/Freq";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <Freq />
      <Footer />
    </div>
  );
}

export default App;
