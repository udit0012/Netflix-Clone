import React from 'react'
import displays from '../../Images/Devices.png'
import { Link } from 'react-router-dom'

const Registration = () => {
  return (
    <div className='flex relative laodingAnimation justify-center items-center text-black'>
                <div className='my-32 flex w-[440px] flex-col justify-center items-center'>
                    <div className='flex justify-center'>
                        <img src={displays} className='w-1/2' alt="" />
                    </div>
                    <div className='my-4 uppercase text-sm'>Step <span className='mx-1 font-bold text-neutral-600'>1</span> of <span className='mx-1 font-bold text-neutral-600'>2</span></div>
                    <div className='text-3xl w-3/4 text-neutral-700 text-center font-bold'>Finish Setting up your account</div>
                    <div className='text-lg w-[63%] my-3 text-neutral-700 text-center'>Netflix is personalised for you. Create a password to watch on any device at any time.</div>
                    <Link to={"/signup/regForm"} className='btn btn-red text-white w-3/4 my-3 p-4 flex justify-center text-2xl font-normal'>Next</Link>
                </div>
            </div>
  )
}

export default Registration