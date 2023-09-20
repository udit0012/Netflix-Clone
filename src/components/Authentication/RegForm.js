import React from 'react'
import displays from '../../Images/Devices.png'
import { Link } from 'react-router-dom'

const RegForm = () => {
    return (
        <div className='relative laodingAnimation px-40 text-black'>
            <div className="px-40">
                <form className='my-10 px-32'>
                    {/* <div className='flex justify-center'>
                        <img src={displays} className='w-1/2' alt="" />
                    </div> */}
                    <div className='my-4 uppercase text-sm'>Step <span className='mx-1 font-bold text-neutral-600'>1</span> of <span className='mx-1 font-bold text-neutral-600'>3</span></div>
                    <div className='text-4xl text-neutral-700 font-bold'>Create a password to start your membership</div>
                    <div className='text-lg mt-3 text-neutral-700'>Just a few more steps and you're done! </div>
                        <div className='text-lg mb-3 text-neutral-700'>We hate paperwork, too.
                    </div>
                    <Link to={"/signup/regForm"} className='btn btn-red text-white my-3 p-4 flex justify-center text-2xl font-normal'>Next</Link>
                </form>
            </div>
        </div>
    )
}

export default RegForm