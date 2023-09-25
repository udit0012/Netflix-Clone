import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { BiErrorCircle } from 'react-icons/bi'
import NoteContext from '../../context/NoteContext'
import { useNavigate } from 'react-router-dom'

const RegForm = () => {
    const navigate = useNavigate()
    const {email,backendURL} = useContext(NoteContext)
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues:{
            email:email,
            password:""
        }
    })
    const handleRegister = async(formData) => {
        try {
            const  res = await fetch(`${backendURL}/apiAuth/register`,{
              method:"POST",
              headers:{
                "Content-type":"application/json",
              },
              body:JSON.stringify({email,password:formData.password})
            })
            const data = await res.json();
            if(data.msg==="Success"){
              localStorage.setItem("netflix-authToken",data.data?.authToken)
              navigate("/movies")
            }
            console.log(data);
          } catch (error) {
            console.log(error);
          }
    }
    console.log(errors);
    return (
        <div className='relative laodingAnimation flex justify-center items-center text-black'>
            <div className="w-[440px] mx-10">
                <form className='my-10' onSubmit={handleSubmit(handleRegister)}>
                    {/* <div className='flex justify-center'>
                        <img src={displays} className='w-1/2' alt="" />
                    </div> */}
                    <div className='my-4 uppercase text-sm'>Step <span className='mx-1 font-bold text-neutral-600'>2</span> of <span className='mx-1 font-bold text-neutral-600'>2</span></div>
                    <div className='text-4xl text-neutral-700 font-bold'>Create a password to start your membership</div>
                    <div className='text-lg mt-3 text-neutral-700'>Just a few more steps and you're done! </div>
                    <div className='text-lg mb-3 text-neutral-700'>We hate paperwork, too.
                    </div>
                    <div className="relative w-full my-2">
                        <input
                        {...register("email", {
                            required: true,
                            pattern: /\S+@\S+\.\S+/
                        })}
                          type="email" id={"email"} className={`block rounded px-4 pb-2 pt-4 w-full text-[16px] text-black bg-transparent border-[1px] appearance-none focus:outline-2 border-neutral-600 focus:ring-0 ${errors.email? "border-red-500":"border-neutral-600"} peer`} placeholder=" " />
                        <label htmlFor={"email"} className="absolute text-[16px] text-neutral-700  duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">{"Email"}</label>
                        {errors.email && <p className='text-sm py-1 items-center flex text-red-500'><span className="px-2">
                            <BiErrorCircle />
                        </span> Enter a valid email address</p>}
                    </div>
                    <div className="relative w-full my-2">
                        <input {...register("password", {
                            required: {value:true,message:"Password is required"},
                            minLength: {value:6,message:"Password should be between 6 to 60 characters"},
                            maxLength: {value:60,message:"Password should be between 6 to 60 characters"}
                        })} type="password" id={"password"} className={`block rounded px-4 pb-2 pt-4 w-full text-[16px] text-black bg-transparent border-[1px] appearance-none focus:outline-2 focus:ring-0 ${errors.password? "border-red-500":"border-neutral-600"} peer`} placeholder=" " />
                        <label htmlFor={"password"} className="absolute text-[16px] text-neutral-700  duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">{"Add a password"}</label>
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

export default RegForm