import React from 'react'
import logo from "../../Images/Netflix-logo.png"
import { Link, useLocation } from 'react-router-dom'
import Registration from './Registration'
import RegForm from './RegForm'

const SignUp = () => {
    const location = useLocation()
    return (
        <div className='overflow-x-hidden'>
            {/* NAVBAR */}
            <div className='flex justify-between items-center px-10 border-b-[1px] border-neutral-400 py-6'>
                <div className="">
                    <img className='h-auto w-44' src={logo} alt='Netflix' />
                </div>
                <div className='flex mx-10'>
                    <Link to={"/login"} className='text-neutral-700 font-semibold text-xl'>Sign in</Link>
                </div>
            </div>

            {/* BODY  */}
            {location.pathname==="/signup/registration"?<Registration />:<RegForm />}
            
            {/* FOOTER  */}
            <div className="flex md:fixed bottom-0 w-full bg-black bg-opacity-10 justify-center items-center">
                <div className='p-6 py-10 text-neutral-600 w-full lg:w-4/5 xl:2/3'>
                    <div className=''>Questions? Call <Link className='hover:underline' to={"/"}>000-800-919-1694</Link></div>
                    <div className='py-3'>
                        <ul className='flex flex-wrap w-full'>
                            <li className='py-1 w-1/2 sm:w-1/3 xl:w-1/4 hover:underline text-sm'><Link to={"/"}>FAQ</Link></li>
                            <li className='py-1 w-1/2 sm:w-1/3 xl:w-1/4 hover:underline text-sm'><Link to={"/"}>Help center</Link></li>
                            <li className='py-1 w-1/2 sm:w-1/3 xl:w-1/4 hover:underline text-sm'><Link to={"/"}>Netflix Shop</Link></li>
                            <li className='py-1 w-1/2 sm:w-1/3 xl:w-1/4 hover:underline text-sm'><Link to={"/"}>Terms of Use</Link></li>
                            <li className='py-1 w-1/2 sm:w-1/3 xl:w-1/4 hover:underline text-sm'><Link to={"/"}>Privacy</Link></li>
                            <li className='py-1 w-1/2 sm:w-1/3 xl:w-1/4 hover:underline text-sm'><Link to={"/"}>Cookie Preferences</Link></li>
                            <li className='py-1 w-1/2 sm:w-1/3 xl:w-1/4 hover:underline text-sm'><Link to={"/"}>Corporate Information</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp