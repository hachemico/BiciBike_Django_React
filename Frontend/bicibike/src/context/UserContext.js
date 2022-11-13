import React, {useState} from 'react'
import { useEffect } from 'react'
import UserService from '../services/UserService'

const Context = React.createContext({})

export function UserContextProvider ({children}) {
  const [favs, setFavs] = useState([])
  const [admin, setAdmin] = useState([])
  const [jwt, setJWT] = useState(
    () => window.sessionStorage.getItem('token')
  )
  const [isRenting, setIsRenting] = useState(
    () => window.sessionStorage.getItem('isRenting')
  )

  useEffect(() => {
    if (!jwt) return setFavs([])
    UserService.getFavs({jwt})
      // .then(setFavs())
      .then(data=>{
        console.log("VUELVE DE LA PETICION UserService.get");
        console.log(data);
        console.log(data.data.favorites);
        setFavs(data.data.favorites)
      })
  }, [jwt])

  return <Context.Provider value={{
    favs,
    jwt,
    isRenting,
    admin,
    setFavs,
    setJWT,
    setIsRenting,
    setAdmin,
  }}>
    {children}
  </Context.Provider>
}

export default Context