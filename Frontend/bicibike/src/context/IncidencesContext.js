import React, {useState, useEffect} from 'react'

const Context = React.createContext({})

export function IncidencesContextProvider ({children}) {

  const [incidences, setIncidences] = useState([])
  const [nuevasIncidencias, setNuevasIncidencias] = useState([])

  return <Context.Provider value = {{incidences,nuevasIncidencias, setIncidences, setNuevasIncidencias}}>
    {children}
  </Context.Provider>
}

export default Context