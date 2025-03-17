import React from 'react'
import CandidGallery from './CandidGallery'
import Candidbanner from './Candidbanner'
import GalleryNavbar from '../Gallerynavbar'
import Booking from '../../Constants/Booking'

const Candidhome = () => {
  return (
    <div>
      <Candidbanner/>
      <GalleryNavbar/>
      <CandidGallery/>
      <Booking/>
    </div>
  )
}

export default Candidhome
