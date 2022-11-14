import React, {useState, useEffect} from 'react'

const Context = React.createContext({})

export function IncidencesContextProvider ({children}) {

  const [incidences, setIncidences] = useState([])
  const [nuevasIncidencias, setNuevasIncidencias] = useState([])
  console.log("Incidences-Context")
  console.log(incidences);
  console.log(nuevasIncidencias);

  return <Context.Provider value = {{incidences,nuevasIncidencias, setIncidences, setNuevasIncidencias}}>
    {children}
  </Context.Provider>
}

export default Context