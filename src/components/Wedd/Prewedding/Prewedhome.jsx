import React from 'react'
import PreWeddingbanner from './prewedbanner'
import WeddingNavbar from '../Wednavbar'
import PreWeddingAbout from './Prewedabout'
import PreweddingGallery from './Prewedgallery'

import Booking from '../../Constants/Booking'

const Prewedhome = () => {
    return (
        <div>
            <PreWeddingbanner />
            <WeddingNavbar />
            <PreWeddingAbout />
            <PreweddingGallery />
            <Booking/>
        </div>
    )
}

export default Prewedhome
