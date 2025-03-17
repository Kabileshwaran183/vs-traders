import React from 'react'
import Photobanner from './Photobanner'
import OthersNavbar from '../Othernavbar'
import PhotoeditGallery from './Photogallery'
import Booking from '../../Constants/Booking'

const Photohome = () => {
  return (
    <div>
      <Photobanner/>
      <OthersNavbar/>
      <PhotoeditGallery/>
      <Booking/>
    </div>
  )
}

export default Photohome
