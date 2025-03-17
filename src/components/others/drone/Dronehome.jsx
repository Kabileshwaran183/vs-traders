import React from 'react'
import Dronebanner from './Dronebanner'
import DroneGallery from './Dronegallery'
import OthersNavbar from '../Othernavbar'
import Booking from '../../Constants/Booking'

const Dronehome = () => {
    return (
        <div>
            <Dronebanner />
            <OthersNavbar />
            <DroneGallery />

            <Booking />
        </div>
    )
}

export default Dronehome
