import React, {useState, useEffect} from 'react'
import StationsService from '../services/StationsService'
import { useStations } from '../hooks/useStations';
const Context = React.createContext({})

export function RentsContextProvider ({children}) {

  const [rent, setRent] = useState([])
  
  console.log("Rents-Context")
  console.log(rent)

  return <Context.Provider value = {{rent, setRent}}>
    {children}
  </Context.Provider>
}

export default Context