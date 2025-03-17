import React from 'react'


import PreweddingGallery from '../../Wedd/Prewedding/Prewedgallery'
import PostweddingGallery from '../../Wedd/Postweddding/Postwedgallery'
import OutdoorGallery from '../../Wedd/Outdoor/Outdoorgallery'
import Booking from '../../Constants/Booking'
import GalleryNavbar from '../Gallerynavbar'
import Wedgallerybanner1 from './Wedbanner'

const GalleryWeddinghome = () => {
    return (
        <div>
            <Wedgallerybanner1 />
            <GalleryNavbar />
            <PreweddingGallery />
            <PostweddingGallery />
            <OutdoorGallery />
            <Booking />

        </div>
    )
}

export default GalleryWeddinghome
