import React from 'react'
import Portratisbanner from './Portbanner'
import GalleryNavbar from '../Gallerynavbar'
import PortraitsGallery from './Portgallery'
import Booking from '../../Constants/Booking'

const Portraitshome = () => {
  return (
    <div>
        <Portratisbanner/>
        <GalleryNavbar/>
        <PortraitsGallery/>
        <Booking/>
      
    </div>
  )
}

export default Portraitshome
