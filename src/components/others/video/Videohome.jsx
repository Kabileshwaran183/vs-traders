import React from 'react'
import Videobanner from './Videobanner'
import OthersNavbar from '../Othernavbar'
import Videoshootgallery from './Videogallery'
import Booking from '../../Constants/Booking'

const Videohome = () => {
    return (
        <div>
            <Videobanner />
            <OthersNavbar />
            <Videoshootgallery />
            <Booking />
        </div>
    )
}

export default Videohome
