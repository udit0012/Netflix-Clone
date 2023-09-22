import React from 'react'
import { FiCheck } from 'react-icons/fi'
import { GoCheckCircle } from "react-icons/go"
import { Link } from 'react-router-dom'

const Step2 = () => {
    return (
        <div className='flex relative laodingAnimation justify-center text-black'>
            <div className='my-16 flex w-[440px] flex-col justify-center items-center'>
                <div className='flex justify-center'>
                    <GoCheckCircle className='text-5xl text-red-600' />
                </div>
                <div className='my-4 uppercase text-sm'>Step <span className='mx-1 font-bold text-neutral-600'>2</span> of <span className='mx-1 font-bold text-neutral-600'>3</span></div>
                <div className='text-3xl w-3/4 text-neutral-700 text-center font-bold'>Choose your plan.</div>
                <div className='my-4'>
                    <div className='text-lg my-3 text-neutral-700 flex' > <FiCheck className='mx-3 text-4xl text-red-600' /> <span className="w-[250px]">No commitments, cancel anytime.</span></div>
                    <div className='text-lg my-3 text-neutral-700 flex' > <FiCheck className='mx-3 text-4xl text-red-600' /> <span className="w-[250px]">Everything on Netflix for one low price.</span></div>
                    <div className='text-lg my-3 text-neutral-700 flex' > <FiCheck className='mx-3 text-4xl text-red-600' /> <span className="w-[250px]">No ads and no extra fees, Ever.</span></div>
                </div>
                <Link to={"/signup/planForm"} className='btn btn-red text-white w-3/4 my-3 p-4 flex justify-center text-2xl font-normal'>Next</Link>
            </div>
        </div>
    )
}

export default Step2