



import { DropDown } from "./components/DropNav"

import About from "./components/About"
import Contact from "./components/Contact"

import { Route, Routes } from "react-router-dom"

import Home from "./components/Home"
import Footer1 from "./components/Footer"
import Weddinghome from "./components/Wedd/Outdoor/Weddinghome"
import Prewedhome from "./components/Wedd/Prewedding/Prewedhome"
import Postwedhome from "./components/Wedd/Postweddding/Postwedhome"
import WhatsAppButton from "./components/Whatappbtn"

import Galleryhome from "./components/Gallery/Galleryhome"
import GalleryWeddinghome from "./components/Gallery/Wedding/Weddinghome"
import Portraitshome from "./components/Gallery/Portraits/Portraitshome"
import Eventhome from "./components/Gallery/Events/Eventhome"
import Couplehome from "./components/Gallery/Couple Portraits/Couplehome"
import Candidhome from "./components/Gallery/candid Momenet/Candidhome"

import Babyhome from "./components/others/Baby/Babyhome"
import Birthhome from "./components/others/birthday/Birthhome"
import Dronehome from "./components/others/drone/Dronehome"
import Videohome from "./components/others/video/Videohome"
import Photohome from "./components/others/Photoedit/Photohome"
import Otherhome from "./components/others/Otherhome"
import Notfoundhome from "./components/Notfound/Notfoundhome"

import ScrollToTop from "./components/ScroltoTop"
import ContactForm from "./components/Enquriy"
import Sephome from "./components/Seperate/Sephome"
import Subscripition from "./components/Subscripition"
import SubscribeSection from "./components/Subscripition"






function App() {

  return (
    <>


      <DropDown />







      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Contacts" element={<ContactForm />} />
        <Route path="/SeparateView" element={<Sephome />} />

        <Route path="/weddings/outdoor" element={<Weddinghome />} />
        <Route path="/weddings/pre-wedding" element={<Prewedhome />} />
        <Route path="/weddings/post-wedding" element={<Postwedhome />} />
        <Route path="/gallery/wedding/" element={<GalleryWeddinghome />} />

        <Route path="/gallery/candid-moment" element={<Candidhome />} />
        <Route path="/gallery/couple-portraits" element={<Couplehome />} />
        <Route path="/gallery/events" element={<Eventhome />} />
        <Route path="/gallery/portraits" element={<Portraitshome />} />
        <Route path="/gallery/all" element={<Galleryhome />} />
        <Route path="/other/baby-photography" element={<Babyhome />} />
        <Route path="/other/birthday-celebration" element={<Birthhome />} />
        <Route path="/other/drone-photography" element={<Dronehome />} />
        <Route path="/other/video-shoot" element={<Videohome />} />
        <Route path="/other/photo-edit" element={<Photohome />} />
        <Route path="/other/all" element={<Otherhome />} />
        <Route path="*" element={<Notfoundhome />} />




      </Routes>


      <WhatsAppButton />
      <ScrollToTop />
      <Footer1 />









    </>
  )
}

export default App
