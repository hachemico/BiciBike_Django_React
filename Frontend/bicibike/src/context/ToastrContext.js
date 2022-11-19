import React, {useState, useEffect} from 'react'

const Context = React.createContext({})

export function ToastrContextProvider ({children}) {
    
    console.log("Toastr-Context");
    const [toastr, setToastr] = useState([])
  

    return <Context.Provider value = {{toastr,setToastr}}>
            {children}
            </Context.Provider>
}

export default Context