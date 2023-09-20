import React from 'react'
import logo from "../Images/Netflix-logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-6 md:px-10 lg:px-20 xl:px-88 py-6'>
            <div className="">
                <img className='h-auto w-44' src={logo} alt='Netflix' />
            </div>
            <div className='flex mx-10'>
                <Link to={"/login"} className='btn btn-red'>Sign in</Link>
            </div>
        </div>
    )
}

export default Navbar