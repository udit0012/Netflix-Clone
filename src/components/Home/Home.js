import React from 'react'
import Navbar from '../Navbar'
import bgImg from "../../Images/home-bg.jpg"
import downloadImg from "../../Images/DownloadImg.png"
import kidsImg from "../../Images/kidsProfileImg.png"
import { BiErrorCircle } from "react-icons/bi"
import { AiOutlineRight } from "react-icons/ai"
import { useForm } from 'react-hook-form'
import AccordianBox from './AccordianBox'
import { Link } from 'react-router-dom'

const Home = () => {

    const [email, setEmail] = React.useState("")
    const handleEmail = (data) => {
        console.log(data);

    }

    const { register, handleSubmit, formState: { errors } } = useForm()
    console.log("error", errors);
    return (
        <>
            <div className="relative">
                <Navbar />
                <div className="absolute w-full top-0 -z-10 h-full overflow-hidden">
                    <img className="w-full scale-125 translate-y[-10%] h-full object-cover" src={bgImg} alt={"home-bg"} />
                    <div className="overlay"></div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="my-6 lg:my-40 mx-4 font-martel text-center">
                        <div className="text-3xl md:text-4xl lg:text-5xl font-[900] my-3 lg:my-6 mx-2">Laughter. Tears. Thrills. Find it all on Netflix.</div>
                        <div className="my-2 md:my-4 lg:my-6 text-lg md:text-xl lg:text-2xl text-center">Endless entertainment starts at just ₹ 149. Cancel anytime.</div>
                        <div className="my-2 md:my-4 lg:my-6 text-lg md:text-xl lg:text-2xl text-center">Ready to watch? Enter your email to create or restart your membership.</div>
                        <form onSubmit={handleSubmit(handleEmail)} className="flex flex-col md:flex-row justify-center items-center gap-2 py-4">
                            <div className="relative w-10/12 md:w-1/2">

                                <input {...register("email", {
                                    required: true,
                                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                                })} type="email" id={"email"} className={`block rounded-md px-6 pb-2 pt-5 w-full text-sm lg:text-lg text-neutral-200 bg-gray-5 border border-gray-700 bg-[rgba(0,0,0,0.6)] appearance-none focus:outline-2 focus:ring-0 ${errors.email && "border-red-500"} peer`} placeholder=" " />
                                <label htmlFor={"email"} className="absolute text-sm lg:text-lg text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">{"Email address"}</label>
                                {errors.email && <p className='text-sm py-2 items-center flex text-red-500'><span className="px-2">
                                    <BiErrorCircle />
                                </span> Please enter a valid email address</p>}

                            </div>
                            <div><button className="btn btn-red text-lg md:text-xl lg:text-2xl px-5"><span className="pt-1 lg:pt-2">Get Started</span> <span className="px-1">
                                <AiOutlineRight />
                            </span> </button></div>
                        </form>
                    </div>
                </div>
            </div>
            <hr className='h-2 bg-neutral-700 border-0' />
            <div className='flex justify-center items-center downloadAdd py-20 lg:py-28'>
                <div className='flex flex-col-reverse gap-10 md:gap-12  xl:gap-16 md:flex-row justify-center items-center w-10/12 md:w-8/12 xl:w-2/3'>
                    <div>
                        <img src={downloadImg} className='w-[260px] md:w-[350px] xl:w-[600px]' alt="" />
                    </div>
                    <div className='text-center md:text-left'>
                        <div className='text-3xl md:text-4xl xl:text-5xl font-bold'>Download your shows to watch offline</div>
                        <div className='pt-4 xl:pt-10 text-lg md:text-xl xl:text-2xl'>Save your favourites easily and always have something to watch.</div>
                    </div>
                </div>
            </div>
            <hr className='h-2 bg-neutral-700 border-0' />
            <div className='flex justify-center items-center downloadAdd py-20 lg:py-28'>
                <div className='flex flex-col-reverse md:flex-row-reverse gap-16 justify-center items-center w-10/12 md:w-8/12 xl:w-2/3'>
                    <div>
                        <img src={kidsImg} className='w-[400px] md:w-[1000px] xl:w-[1400]' alt="" />
                    </div>
                    <div className='text-center md:text-left'>
                        <div className='text-3xl md:text-4xl xl:text-5xl font-bold'>Create profiles for kids</div>
                        <div className='pt-4 xl:pt-10 text-lg md:text-xl xl:text-2xl'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</div>
                    </div>
                </div>
            </div>
            <hr className='h-2 bg-neutral-700 border-0' />
            <div className='flex flex-col justify-center items-center px-6 py-10'>
                <h1 className='text-4xl lg:text-6xl text-center font-bold my-6'>Frequently Asked Questions</h1>
                <AccordianBox />
                <div className='pt-10 md:pt-16 xl:pt-20'>
                    <div className='text-lg md:text-xl xl:text-2xl pb-2 text-center'>Ready to watch? Enter your email to create or restart your membership.</div>
                    <form onSubmit={handleSubmit(handleEmail)} className="flex flex-col md:flex-row justify-center items-center gap-2 py-4">
                        <div className="relative w-10/12 md:w-2/3">

                            <input {...register("email", {
                                required: true,
                                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                            })} type="email" id={"email"} className={`block rounded-md px-6 pb-2 pt-5 w-full text-sm lg:text-lg text-neutral-200 bg-gray-5 border border-gray-700 bg-[rgba(0,0,0,0.6)] appearance-none focus:outline-2 focus:ring-0 ${errors.email && "border-red-500"} peer`} placeholder=" " />
                            <label htmlFor={"email"} className="absolute text-sm lg:text-lg text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">{"Email address"}</label>
                            {errors.email && <p className='text-sm py-2 items-center flex text-red-500'><span className="px-2">
                                <BiErrorCircle />
                            </span> Please enter a valid email address</p>}

                        </div>
                        <div><button className="btn btn-red text-lg md:text-xl lg:text-2xl px-5"><span className="pt-1 lg:pt-2">Get Started</span> <span className="px-1">
                            <AiOutlineRight />
                        </span> </button></div>
                    </form>
                </div>
            </div>
            <hr className='h-2 bg-neutral-700 border-0' />
            <div className="flex justify-center items-center">
                <div className='p-10 text-neutral-400 w-full lg:w-4/5 xl:2/3'>
                    <div className=''>Questions? Call <Link className='underline' to={"/"}>000-800-919-1694</Link></div>
                    <div className='py-4'>
                        <ul className='flex flex-wrap w-full'>
                            <li className='py-2 w-1/2 lg:w-1/4 underline text-sm'><Link to={"/"}>FAQ</Link></li>
                            <li className='py-2 w-1/2 lg:w-1/4 underline text-sm'><Link to={"/"}>Help center</Link></li>
                            <li className='py-2 w-1/2 lg:w-1/4 underline text-sm'><Link to={"/"}>Account</Link></li>
                            <li className='py-2 w-1/2 lg:w-1/4 underline text-sm'><Link to={"/"}>Media Center</Link></li>
                            <li className='py-2 w-1/2 lg:w-1/4 underline text-sm'><Link to={"/"}>Investor Relations</Link></li>
                            <li className='py-2 w-1/2 lg:w-1/4 underline text-sm'><Link to={"/"}>JObs</Link></li>
                            <li className='py-2 w-1/2 lg:w-1/4 underline text-sm'><Link to={"/"}>Ways to Watch</Link></li>
                            <li className='py-2 w-1/2 lg:w-1/4 underline text-sm'><Link to={"/"}>Terms of Use</Link></li>
                            <li className='py-2 w-1/2 lg:w-1/4 underline text-sm'><Link to={"/"}>Privacy</Link></li>
                            <li className='py-2 w-1/2 lg:w-1/4 underline text-sm'><Link to={"/"}>Cookie Preferences</Link></li>
                            <li className='py-2 w-1/2 lg:w-1/4 underline text-sm'><Link to={"/"}>Corporate Information</Link></li>
                            <li className='py-2 w-1/2 lg:w-1/4 underline text-sm'><Link to={"/"}>Contact Us</Link></li>
                            <li className='py-2 w-1/2 lg:w-1/4 underline text-sm'><Link to={"/"}>Speed Test</Link></li>
                            <li className='py-2 w-1/2 lg:w-1/4 underline text-sm'><Link to={"/"}>Legal Notices</Link></li>
                            <li className='py-2 w-1/2 lg:w-1/4 underline text-sm'><Link to={"/"}>Only on Netflix</Link></li>
                        </ul>
                    </div>
                    <div className='py-6 text-sm'>Netflix India</div>
                </div>
            </div>
        </>
    )
}

export default Home