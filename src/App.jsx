import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LogIn from "./components/LogIn";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import ForYou from "./components/ForYou";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Newsletter from "./components/NewsLetter";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Why from "./components/Why";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    if (
      location.pathname === "/login" ||
      location.pathname === "/signup" ||
      location.pathname === "/join"
    ) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [location.pathname]);

  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<LogIn />} />
        <Route path="/join" element={<LogIn />} />
      </Routes>
      {/* Add other routes here */}
      <Hero />
      <HowItWorks />
      <Benefits />
      <Why />
      <ForYou />
      <Newsletter />
      <Footer />
      <ButtonGradient />
    </div>
  );
};

export default App;
