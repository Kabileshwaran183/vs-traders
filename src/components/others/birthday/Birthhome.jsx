import React from 'react'
import Birthdaybanner from './Birthdaybanner'
import OthersNavbar from '../Othernavbar'
import BirthdayGallery from './Birthdaygallery'
import Booking from '../../Constants/Booking'

const Birthhome = () => {
  return (
    <div>
      <Birthdaybanner/>
      <OthersNavbar/>
      <BirthdayGallery/>
      <Booking/>
    </div>
  )
}

export default Birthhome
