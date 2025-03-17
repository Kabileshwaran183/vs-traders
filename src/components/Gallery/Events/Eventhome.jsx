import React from 'react'
import Eventbanner from './Eventbanner'
import GalleryNavbar from '../Gallerynavbar'
import EventGallery from './EventGallery'
import Booking from '../../Constants/Booking'

const Eventhome = () => {
  return (
    <div>
      <Eventbanner/>
      <GalleryNavbar/>
      <EventGallery/>
      <Booking/>
    </div>
  )
}

export default Eventhome
