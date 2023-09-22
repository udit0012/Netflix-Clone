import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { BiErrorCircle } from 'react-icons/bi'
import NoteContext from '../../context/NoteContext'
import { FiCheck } from 'react-icons/fi'

const plans = [
    {
        type: "Mobile",
        monthly_price: "₹ 149",
        video_quality: "Good",
        resolution: "480p",
        devices: ["Phone", "Tablet"]
    }, {
        type: "Basic",
        monthly_price: "₹ 199",
        video_quality: "Good",
        resolution: "720p",
        devices: ["Phone", "Tablet", "Computer", "TV"]
    }, {
        type: "Standard",
        monthly_price: "₹ 499",
        video_quality: "Better",
        resolution: "1080p",
        devices: ["Phone", "Tablet", "Computer", "TV"]
    }, {
        type: "Premium",
        monthly_price: "₹ 649",
        video_quality: "Best",
        resolution: "4K+HDR",
        devices: ["Phone", "Tablet", "Computer", "TV"]
    }
]

const PlanForm = () => {
    const { email } = useContext(NoteContext)
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: email,
            password: ""
        }
    })
    const handleRegister = (data) => {
        console.log("data", data);
    }
    console.log(errors);
    return (
        <div className='relative laodingAnimation flex justify-center items-center text-black'>
            <div className="mx-10">
                <form className='my-10' onSubmit={handleSubmit(handleRegister)}>
                    {/* <div className='flex justify-center'>
                        <img src={displays} className='w-1/2' alt="" />
                    </div> */}
                    <div className='my-4 uppercase text-sm'>Step <span className='mx-1 font-bold text-neutral-600'>2</span> of <span className='mx-1 font-bold text-neutral-600'>3</span></div>
                    <div className='text-4xl text-neutral-700 font-bold'>Choose the plan that's right for you.</div>
                    <div className='my-4'>
                        <div className='text-lg text-neutral-700 flex' > <FiCheck className='mx-3 text-4xl text-red-600' /> <span>Watch all you want. Ad-free.</span></div>
                        <div className='text-lg text-neutral-700 flex' > <FiCheck className='mx-3 text-4xl text-red-600' /> <span>Recommendations just for you.</span></div>
                        <div className='text-lg text-neutral-700 flex' > <FiCheck className='mx-3 text-4xl text-red-600' /> <span>Change or cancel your plan anytime.</span></div>
                    </div>
                    <div className='grid grid-cols-5 gap-5'>
                            <div className='grid grid-rows-5 border-b-2 border-black'>
                                <div></div>
                                <div>Monthly price</div>
                                <div>Video quality</div>
                                <div>Resolution</div>
                                <div>Devices you can use to watch</div>
                            </div>
                            {plans.map((plan) => {
                                return <div key={plan.type} className='grid-rows-5'>
                                    <div>{plan.type}</div>
                                    <div>{plan.monthly_price}</div>
                                    <div>{plan.video_quality}</div>
                                    <div>{plan.resolution}</div>
                                    <div>
                                        Phone
                                    </div>
                                </div>
                            })} 

                    </div>
                    <button type='submit' className='btn btn-red w-full text-white my-3 p-4 flex justify-center text-2xl font-normal'>Next</button>
                </form>
            </div>
        </div>
    )
}

export default PlanForm