import React, {useState} from 'react'
import { useEffect } from 'react'
import UserService from '../services/UserService'

const Context = React.createContext({})

export function UserContextProvider ({children}) {
  const [favs, setFavs] = useState([])
  const [admin, setAdmin] = useState([])
  const [profileData, setProfileData] = useState([])
  const [username, setUsername] = useState([])
  const [jwt, setJWT] = useState(
    () => window.sessionStorage.getItem('token')
  )
  const [isRenting, setIsRenting] = useState(
    () => window.sessionStorage.getItem('isRenting')
  )
  const [auxFavorite,setAuxFavorite] = useState([])
  const [numRents, setNumRents] = useState([])
  const [numIncidences, setNumIncidences] = useState([])
  console.log("User-Context");
  console.log("Favoritos>> "+favs);
  console.log("Username>>"+ username);

  useEffect(() => {
    if (!jwt) return setFavs([])
    UserService.getFavs({jwt})
      .then(data=>{
        setFavs(data.data.favorites)
      })
  }, [jwt,auxFavorite])

  return <Context.Provider value={{
    favs,
    jwt,
    isRenting,
    admin,
    auxFavorite,
    profileData,
    username,
    numRents,
    numIncidences,
    setFavs,
    setJWT,
    setIsRenting,
    setAdmin,
    setAuxFavorite,
    setProfileData,
    setUsername,
    setNumRents,
    setNumIncidences
  }}>
    {children}
  </Context.Provider>
}

export default Context