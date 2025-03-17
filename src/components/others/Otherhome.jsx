import React from 'react'
import Otherbanner from './Otherbanner'
import OthersNavbar from './Othernavbar'
import BabyGallery from './Baby/BabyGallery'
import BirthdayGallery from './birthday/Birthdaygallery'
import DroneGallery from './drone/Dronegallery'
import PhotoeditGallery from './Photoedit/Photogallery'
import Videoshootgallery from './video/Videogallery'
import Booking from '../Constants/Booking'

const Otherhome = () => {
  return (
    <div>
      <Otherbanner/>
      <OthersNavbar/>
      <BabyGallery/>
      <BirthdayGallery/>
      <DroneGallery/>
      <PhotoeditGallery/>
      <Videoshootgallery/>
      <Booking/>
    </div>
  )
}

export default Otherhome
