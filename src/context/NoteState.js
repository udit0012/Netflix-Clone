import React from 'react'
import NoteContext from './NoteContext'

const NoteState = (props) => {

    const backendURL = "http://localhost:8080"
    const [email,setEmail] = React.useState("");
    const [userExists,setUserExists] = React.useState(false);
  return (
    <NoteContext.Provider value={{email,setEmail,backendURL,userExists,setUserExists}}>
        {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState