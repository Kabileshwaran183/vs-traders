import React from 'react'
import Gallerybanner from './GalleryBanner'
import GalleryNavbar from './Gallerynavbar'
import OutdoorGallery from '../Wedd/Outdoor/Outdoorgallery'
import PreweddingGallery from '../Wedd/Prewedding/Prewedgallery'
import PostweddingGallery from '../Wedd/Postweddding/Postwedgallery'
import Booking from '../Constants/Booking'
import PortraitsGallery from './Portraits/Portgallery'
import EventGallery from './Events/EventGallery'
import CoupleGallery from './Couple Portraits/Couplegallery'
import CandidGallery from './candid Momenet/CandidGallery'


const Galleryhome = () => {
  return (
    <div>

      <Gallerybanner />
      <GalleryNavbar />
      <OutdoorGallery />
      <PreweddingGallery />
      <PostweddingGallery />
      <PortraitsGallery/>
      <EventGallery/>
      <CoupleGallery/>
      <CandidGallery/>
      


      <Booking />
    </div>
  )
}

export default Galleryhome
