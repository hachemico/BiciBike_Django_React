import React, {useState} from 'react'

const Context = React.createContext({})

export function BikeContextProvider ({children}) {

  const [bikes, setBikes] = useState([])
  const [available, setAvailable] = useState([])
  const [toUpdateBike, setToUpdateBike] = useState([])
  console.log("Bikes-Context")
  console.log(bikes)

  return <Context.Provider value = {{bikes, setBikes,available,setAvailable,toUpdateBike,setToUpdateBike}}>
    {children}
  </Context.Provider>
}

export default Context