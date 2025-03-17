import React from 'react'
import OthersNavbar from '../Othernavbar'
import BabyGallery from './BabyGallery'
import Booking from '../../Constants/Booking'
import Babybanner from './Babybanner'

const Babyhome = () => {
    return (
        <div>
            <Babybanner />
            <OthersNavbar />
            <BabyGallery />
            <Booking />
        </div>
    )
}

export default Babyhome
