import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { BiErrorCircle } from 'react-icons/bi'

const RegForm = ({email}) => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleRegister = (data) => {
        console.log("data", data);
    }
    return (
        <div className='relative laodingAnimation px-40 text-black'>
            <div className="px-72">
                <form className='my-10 px-72' onSubmit={handleSubmit(handleRegister)}>
                    {/* <div className='flex justify-center'>
                        <img src={displays} className='w-1/2' alt="" />
                    </div> */}
                    <div className='my-4 uppercase text-sm'>Step <span className='mx-1 font-bold text-neutral-600'>1</span> of <span className='mx-1 font-bold text-neutral-600'>3</span></div>
                    <div className='text-4xl text-neutral-700 font-bold'>Create a password to start your membership</div>
                    <div className='text-lg mt-3 text-neutral-700'>Just a few more steps and you're done! </div>
                    <div className='text-lg mb-3 text-neutral-700'>We hate paperwork, too.
                    </div>
                    <div className="relative w-full my-2">
                        <input
                         value={email} type="email" id={"email"} className={`block rounded px-4 pb-2 pt-4 w-full text-[16px] text-neutral-700 bg-transparent border-[1px] appearance-none focus:outline-2 focus:ring-0 peer`} placeholder=" " />
                        <label htmlFor={"email"} className="absolute text-[16px] text-neutral-700  duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">{"Email"}</label>
                    </div>
                    <div className="relative w-full my-2">
                        <input {...register("password", {
                            required: true,
                            // pattern: /^[a-zA-Z0-9._%+-]+@[a-A-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                        })} type="password" id={"password"} className={`block rounded px-4 pb-2 pt-4 w-full text-[16px] text-neutral-200 bg-transparent border-[1px] appearance-none focus:outline-2 focus:ring-0 ${errors.password? "border-red-500":"border-neutral-600"} peer`} placeholder=" " />
                        <label htmlFor={"password"} className="absolute text-[16px] text-neutral-700  duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">{"Add a password"}</label>
                        {errors.password && <p className='text-sm py-2 items-center flex text-red-500'><span className="px-2">
                            <BiErrorCircle />
                        </span> Password is required</p>}
                    </div>
                    <button type='submit' className='btn btn-red w-full text-white my-3 p-4 flex justify-center text-2xl font-normal'>Next</button>
                </form>
            </div>
        </div>
    )
}

export default RegForm