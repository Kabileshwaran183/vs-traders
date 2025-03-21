



import About from "./components/About"

import Content from "./components/Content"
import { DropDown } from "./components/DropNav"
import ContactForm from "./components/Enquriy"
import Events from "./components/Event"

import Footer1 from "./components/Footer"
import Hero from "./components/Hero"


import ScrollToTop from "./components/ScroltoTop"
import Section1 from "./components/Section1"
import Section2 from "./components/Section2"
import Testimonials from "./components/Testimonals"
import WhatsAppButton from "./components/Whatappbtn"
import WhyChooseUs from "./components/WhyChooseus"

function App() {

  return (
    <>
      <DropDown />
      <Hero />
      
      <Content />
      <Events />
      <ContactForm />
      <WhyChooseUs />
      <Section1 />
      <About />
     
      
     

      
      <Testimonials />

      <WhatsAppButton />
      <ScrollToTop />
      <Footer1 />
    </>
  )
}

export default App
