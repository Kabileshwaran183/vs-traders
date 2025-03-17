import React from 'react'
import Couplebanner from './Couplebanner'
import GalleryNavbar from '../Gallerynavbar'
import CoupleGallery from './Couplegallery'
import Booking from '../../Constants/Booking'

const Couplehome = () => {
  return (
    <div>
      <Couplebanner/>
      <GalleryNavbar/>
      <CoupleGallery/>
      <Booking/>
      
    </div>
  )
}

export default Couplehome
