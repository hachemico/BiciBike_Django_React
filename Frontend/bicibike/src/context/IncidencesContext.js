import React, {useState, useEffect} from 'react'

const Context = React.createContext({})

export function IncidencesContextProvider ({children}) {

  const [incidences, setIncidences] = useState([])
  
  console.log("Incidences-Context")
  console.log(incidences)

  return <Context.Provider value = {{incidences, setIncidences}}>
    {children}
  </Context.Provider>
}

export default Context