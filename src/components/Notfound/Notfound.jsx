import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Notfound = () => {
    return (
        <div className='text-center py-64'>
            <h1>404 | Not Found</h1>
            <div className='flex items-center justify-center'>
                <Link to="/">Go To Home Page</Link>
                <Link to="/"><FaHome className='text-teal-400 ml-4' /></Link>

            </div>

        </div>
    )
}

export default Notfound