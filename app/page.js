import AboutUs from "./components/AboutUs";
import Benefits from "./components/Benefits";
import Features from "./components/Features";
import Hero from "./components/hero";
import ContactUs from "./components/ContactUs";
import Fade from "./components/Fade";

export default function Home() {
  return (
    <>
   
      <Hero />
      
        <AboutUs />
  
      <Fade>
        <Features />
      </Fade>
      <Fade>
        <Benefits />
      </Fade>
      <ContactUs />
    </>
  );
}
