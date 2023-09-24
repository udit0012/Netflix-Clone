import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { BiErrorCircle } from 'react-icons/bi'
import NoteContext from '../../context/NoteContext'

const LoginForm = () => {
    const {email} = useContext(NoteContext)
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues:{
            email:email,
            password:""
        }
    })
    const handleRegister = (data) => {
        console.log("data", data);
    }
    console.log(errors);
    return (
        <div className='relative laodingAnimation flex justify-center items-center text-black'>
            <div className="w-[440px] mx-10">
                <form className='my-10' onSubmit={handleSubmit(handleRegister)}>
                    {/* <div className='flex justify-center'>
                        <img src={displays} className='w-1/2' alt="" />
                    </div> */}
                    <div className='my-4 uppercase text-sm'>Step <span className='mx-1 font-bold text-neutral-600'>2</span> of <span className='mx-1 font-bold text-neutral-600'>1</span></div>
                    <div className='text-4xl text-neutral-700 font-bold'>Welcome back!</div>
                    <div className='text-4xl text-neutral-700 font-bold'>Joining Netflix is easy.</div>
                    <div className='text-lg mt-3 text-neutral-700'>Enter your password and you'll be watching in no time. </div>
                    {/* <div className='text-lg mb-3 text-neutral-700'>We hate paperwork, too.
                    </div> */}
                    <div className="relative w-full mt-8 mb-4">
                        <div className=''>Email</div>
                        <div className='my-1 font-bold text-lg'>{email}</div>
                    </div>
                    <div className="relative w-full my-2">
                        <input {...register("password", {
                            required: {value:true,message:"Password is required"},
                        })} type="password" id={"password"} className={`block rounded px-4 pb-2 pt-4 w-full text-[16px] text-black bg-transparent border-[1px] appearance-none focus:outline-2 focus:ring-0 ${errors.password? "border-red-500":"border-neutral-600"} peer`} placeholder=" " />
                        <label htmlFor={"password"} className="absolute text-[16px] text-neutral-700  duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">{"Enter your password"}</label>
                        {errors.password?.type && <p className='text-sm py-1 items-center flex text-red-500'><span className="px-2">
                            <BiErrorCircle />
                        </span>{errors.password?.message}</p>}
                    </div>
                    <button type='submit' className='btn btn-red w-full text-white my-3 p-4 flex justify-center text-2xl font-normal'>Next</button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm