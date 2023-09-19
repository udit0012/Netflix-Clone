import React from 'react'
import logo from "../../Images/Netflix-logo.png"
import bgImg from "../../Images/home-bg.jpg"
import { BiErrorCircle } from 'react-icons/bi'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const SignIn = () => {
    const {register,handleSubmit,formState:{errors}} = useForm()
    const [checked,setChecked] = React.useState(true)
    const handleCheck = (e)=>{
        setChecked(!checked)
    }
    return (
        <div>
            <div className="absolute w-full top-0 -z-10 h-full overflow-hidden">
                <img className="w-full scale-125 translate-y[-10%] h-full object-cover" src={bgImg} alt={"home-bg"} />
                <div className="overlay"></div>
            </div>
            <div>
                <img src={logo} className='p-6 w-72' alt="" />
            </div>
            <div className='flex justify-center items-center'>
                <div className='bg-black bg-opacity-70 p-10'>
                    <div className='text-xl md:text-2xl xl:text-3xl font-semibold'>Sign In</div>
                    <form className='flex flex-col my-4'>
                        <div className="relative w-full my-2">

                            <input {...register("email", {
                                required: true,
                                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                            })} type="email" id={"email"} className={`block rounded px-4 pb-2 pt-4 w-80 text-sm lg:text-lg text-neutral-200 bg-neutral-700 bg-[rgba(0,0,0,0.6)] appearance-none focus:outline-2 focus:ring-0 ${errors.email && "border-red-500"} peer`} placeholder=" " />
                            <label htmlFor={"email"} className="absolute text-sm lg:text-[16px] text-neutral-400  duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">{"Email or phone number"}</label>
                            {errors.email && <p className='text-sm py-2 items-center flex text-red-500'><span className="px-2">
                                <BiErrorCircle />
                            </span> Please enter a valid email address</p>}

                        </div>
                        <div className="relative w-full my-2">

                            <input {...register("email", {
                                required: true,
                                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                            })} type="email" id={"email"} className={`block rounded px-4 pb-2 pt-4 w-80 text-sm lg:text-lg text-neutral-200 bg-neutral-700 bg-[rgba(0,0,0,0.6)] appearance-none focus:outline-2 focus:ring-0 ${errors.email && "border-red-500"} peer`} placeholder=" " />
                            <label htmlFor={"email"} className="absolute text-sm lg:text-[16px] text-neutral-400  duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">{"Password"}</label>
                            {errors.email && <p className='text-sm py-2 items-center flex text-red-500'><span className="px-2">
                                <BiErrorCircle />
                            </span> Please enter a valid email address</p>}

                        </div>
                        <div className='my-8'>
                            <button className='btn btn-red w-full flex justify-center items-center rounded py-3 font-semibold'>Sign In</button>
                            <div className='flex justify-between items-center'>
                                <div className='text-neutral-400 text-sm my-2 flex items-center'><input className='mr-1 scale-125 accent-neutral-500 bg-black checked:bg-black' checked={checked} onChange={handleCheck} type="checkbox" name="" id="" /> Remember me</div>
                                <Link to={"/"} className='text-neutral-400 text-sm'>Need help?</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn