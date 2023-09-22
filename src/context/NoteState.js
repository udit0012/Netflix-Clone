import React from 'react'
import NoteContext from './NoteContext'

const NoteState = (props) => {
    const [email,setEmail] = React.useState("");
  return (
    <NoteContext.Provider value={{email,setEmail}}>
        {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState