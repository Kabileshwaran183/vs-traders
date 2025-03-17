import React from 'react'
import PostWeddingbanner from './Postwedbanner'
import WeddingNavbar from '../Wednavbar'
import PostWeddingAbout from './Postwedabout'
import PostweddingGallery from './Postwedgallery'
import Booking from '../../Constants/Booking'

const Postwedhome = () => {
    return (
        <div>
            <PostWeddingbanner />
            <WeddingNavbar />
            <PostWeddingAbout />
            <PostweddingGallery />
            <Booking />

        </div>
    )
}

export default Postwedhome
