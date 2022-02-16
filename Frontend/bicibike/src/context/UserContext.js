import React, {useState} from 'react'
import { useEffect } from 'react'
import getFavs from '../services/UserService'

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
    // getFavs({jwt})
    //   .then(setFavs())
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