import React from 'react'
import logo from "../../Images/Netflix-logo.png"
import bgImg from "../../Images/home-bg.jpg"
import { BiErrorCircle } from 'react-icons/bi'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [checked, setChecked] = React.useState(true)
    const handleCheck = (e) => {
        setChecked(!checked)
    }
    const handleLogin = (data) => {
        console.log("data", data);
        console.log("check", checked);
    }
    return (
        <div className='w-full bg-black h-[100vh]'>
            <div className='relative h-full z-10'>
                <div className="absolute hidden md:block w-full top-0 h-full z-[-1] overflow-hidden">
                    <img className="w-full scale-125 translate-y[-10%] h-full object-cover" src={bgImg} alt={"home-bg"} />
                    <div className="overlay"></div>
                </div>
                <div>
                    <img src={logo} className='p-6 w-60' alt="" />
                </div>
                <div className='md:flex justify-center items-center'>
                    <div className='bg-black bg-opacity-70 py-4 px-10 md:p-14 rounded-md'>
                        <div className='text-3xl font-semibold'>Sign In</div>
                        <form className='flex flex-col my-4' onSubmit={handleSubmit(handleLogin)}>
                            <div className="relative w-full my-2">
                                <input {...register("email", {
                                    required: true,
                                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                                })} type="email" id={"email"} className={`block rounded px-4 pb-2 pt-4 w-full text-[16px] text-neutral-200 bg-neutral-700 bg-[rgba(0,0,0,0.6)] appearance-none focus:outline-2 focus:ring-0 ${errors.email && "border-red-500"} peer`} placeholder=" " />
                                <label htmlFor={"email"} className="absolute text-[16px] text-neutral-400  duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">{"Email or phone number"}</label>
                                {errors.email && <p className='text-sm py-2 items-center flex text-red-500'><span className="px-2">
                                    <BiErrorCircle />
                                </span> Please enter a valid email address</p>}
                            </div>
                            <div className="relative w-full my-2">
                                <input {...register("password", {
                                    required: true,
                                    // pattern: /^[a-zA-Z0-9._%+-]+@[a-A-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                                })} type="password" id={"password"} className={`block rounded px-4 pb-2 pt-4 w-full text-[16px] text-neutral-200 bg-neutral-700 bg-[rgba(0,0,0,0.6)] appearance-none focus:outline-2 focus:ring-0 ${errors.email && "border-red-500"} peer`} placeholder=" " />
                                <label htmlFor={"password"} className="absolute text-[16px] text-neutral-400  duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">{"Password"}</label>
                                {errors.email && <p className='text-sm py-2 items-center flex text-red-500'><span className="px-2">
                                    <BiErrorCircle />
                                </span> Please enter a valid email address</p>}
                            </div>
                            <div className='relative my-8 w-full'>
                                <button type='submit' className='btn btn-red w-full flex justify-center items-center rounded py-3 font-semibold'>Sign In</button>
                                <div className='flex justify-between items-center'>
                                    <div className='text-neutral-400 text-sm my-2 flex items-center'><input className='mr-1 scale-125 accent-neutral-500 bg-black checked:bg-black' checked={checked} onChange={handleCheck} type="checkbox" name="" id="" /> Remember me</div>
                                    <Link to={"/"} className='text-neutral-400 text-sm'>Need help?</Link>
                                </div>
                            </div>
                        </form>
                        <div className='my-14'>
                            <div className='my-2'><span className="text-neutral-500">New to Netflix?</span> <Link className="cursor-pointer hover:underline" to={"/"}>Sign up now.</Link></div>
                            <div className='w-full md:w-[300px] text-xs text-neutral-500'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link className='text-blue-500'>Learn more.</Link></div>
                        </div>
                    </div>
                </div>
                {/* <hr className='border-none h-[2px] bg-neutral-700' /> */}
                <div className="flex border-t-2 border-neutral-700 md:fixed bottom-0 w-full bg-black bg-opacity-60 justify-center items-center">
                    <div className='p-6 text-neutral-500 w-full lg:w-4/5 xl:2/3'>
                        <div className=''>Questions? Call <Link className='hover:underline' to={"/"}>000-800-919-1694</Link></div>
                        <div className='py-3'>
                            <ul className='flex flex-wrap w-full'>
                                <li className='py-1 w-1/2 sm:w-1/3 xl:w-1/4 hover:underline text-sm'><Link to={"/"}>FAQ</Link></li>
                                <li className='py-1 w-1/2 sm:w-1/3 xl:w-1/4 hover:underline text-sm'><Link to={"/"}>Help center</Link></li>
                                <li className='py-1 w-1/2 sm:w-1/3 xl:w-1/4 hover:underline text-sm'><Link to={"/"}>Terms of Use</Link></li>
                                <li className='py-1 w-1/2 sm:w-1/3 xl:w-1/4 hover:underline text-sm'><Link to={"/"}>Privacy</Link></li>
                                <li className='py-1 w-1/2 sm:w-1/3 xl:w-1/4 hover:underline text-sm'><Link to={"/"}>Cookie Preferences</Link></li>
                                <li className='py-1 w-1/2 sm:w-1/3 xl:w-1/4 hover:underline text-sm'><Link to={"/"}>Corporate Information</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn