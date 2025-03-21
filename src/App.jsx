import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Content from "./components/Content";
import { DropDown } from "./components/DropNav";
import ContactForm from "./components/Enquriy";
import Events from "./components/Event";
import Footer1 from "./components/Footer";
import Hero from "./components/Hero";
import ScrollToTop from "./components/ScroltoTop";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Testimonials from "./components/Testimonals";
import WhatsAppButton from "./components/Whatappbtn";
import WhyChooseUs from "./components/WhyChooseus";

function App() {
  return (
    <>
      
      <DropDown />

      
      <div className="">
        <Routes>
          <Route path="/" element={
            <>
            <Hero />
            <Content />
            <Events />
            <ContactForm />
            <WhyChooseUs />
            <Section1 />
            <About />
            <Testimonials />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="*" element={<h1 className="text-center text-3xl text-white">404 - Page Not Found</h1>} />
        </Routes>
      </div>

      
      <WhatsAppButton />
      <ScrollToTop />
      <Footer1 />
    </>
  );
}

export default App;
