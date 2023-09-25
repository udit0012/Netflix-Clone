import React from 'react'
import NoteContext from './NoteContext'
import { useNavigate } from 'react-router-dom'

const NoteState = (props) => {
    const navigate = useNavigate()
    const backendURL = "http://localhost:8080"
    const [email,setEmail] = React.useState("");
    const [userExists,setUserExists] = React.useState(false);

    const handleLogin=async(formData)=>{
      try {
        const  res = await fetch(`${backendURL}/apiAuth/login`,{
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
  return (
    <NoteContext.Provider value={{email,setEmail,backendURL,userExists,setUserExists,handleLogin}}>
        {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState