import React from 'react'
import logo from "../Images/Netflix-logo.png"

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-6 md:px-10 lg:px-20 xl:px-88 py-6'>
            <div className="">
                <img className='h-auto w-44' src={logo} alt='Netflix' priority />
            </div>
            <div className='flex mx-10'>
                <button className='btn btn-red'>Sign in</button>
            </div>
        </div>
    )
}

export default Navbar