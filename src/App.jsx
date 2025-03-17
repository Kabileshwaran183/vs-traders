



import About from "./components/About"
import { DropDown } from "./components/DropNav"
import ContactForm from "./components/Enquriy"
import Events from "./components/Event"

import Footer1 from "./components/Footer"
import Hero from "./components/Hero"
import Numbercount from "./components/Numbercount"


import ScrollToTop from "./components/ScroltoTop"
import Testimonials from "./components/Testimonals"
import WhatsAppButton from "./components/Whatappbtn"
import WhyChooseUs from "./components/WhyChooseus"







function App() {

  return (
    <>


      <DropDown />
      <Hero/>
      <Events/>
      <About/>
      <WhyChooseUs/>
      <Numbercount/>
      <Testimonials/>
      <ContactForm/>

      <WhatsAppButton/>



      
      <ScrollToTop />
      <Footer1 />









    </>
  )
}

export default App
