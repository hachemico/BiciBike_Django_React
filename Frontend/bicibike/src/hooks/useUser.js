import { useState,useContext,useCallback } from "react";
import LoginService from "../services/LoginService";
import RegisterService from "../services/RegisterService";
import UserContext from "../context/UserContext";
// import  StationsContext  from '../context/StationsContext';

import  RentContext from '../context/RentContext'
import { useNavigate } from 'react-router-dom';
import UserService from '../services/UserService';
import RentService from '../services/RentService';


export default function useUser(){

const { jwt, setJWT,favs,setFavs,isRenting,setIsRenting} = useContext(UserContext)
const {rent,setRent} = useContext(RentContext)
const [state, setState] = useState()

let navigate = useNavigate();

const loginForm = useCallback(({email, password}) => {
  console.log("entra login")
    setState({loading: true, error: false })
    LoginService.postLogin(email, password)
      .then(jwt => {
          console.log("entra hook-useUser --> login")
          console.log(jwt.data.user.token)
        window.sessionStorage.setItem('token', jwt.data.user.token)
        setState({loading: false, error: false })
        setJWT(jwt.data.user.token)
      })
      .catch(err => {
        window.sessionStorage.removeItem('token')
        setState({loading: false, error: true })
        console.error(err)
      })
  }, [setJWT,setState])
// }, [])

const registerForm = useCallback(
    ({email, password, username}) => {
    console.log("entra hook-useUser --> Register")
 
    setState({ loading: true, error: false,loadingUser: false });
    RegisterService.postRegister( username, email, password )
        .then((data) => {
          console.log(data.data.user.token);
          if (data.data.user.token){
            setState({loading: false, error: false })
            navigate('/'); // enviamos el usuario a home, aunque podría ir a Login.
            //// MOSTRAR  TOASTER MENSAJE REGISTRnaADO CORRECTAMENTE
          }else{
            //// MOSTRAR TOASTER ERROR DE REGISTRO. Contacte con un AMINISTRADOR.
            setState({loading: false, error: true })
          }
           
        })
        .catch((err) => {
          console.log(err);
          setState({loading: false, error: true })
        });
    },
    [setState,navigate]
  ); 



  const logout = useCallback(() => {
    console.log("entra hook-useUser --> logout")
    window.sessionStorage.removeItem('token')
    setJWT(null)
  }, [setJWT])

  const check_auth = () => {
    
    if(window.sessionStorage.getItem('token')){
      return true
    }
    return false
  }

  const rentBike = useCallback(({slot}) => {
    console.log("entra hook-useUser --> rentBike")
    console.log(slot)
    RentService.postRent(slot.name)
    // .then(setRent)
    .then(data=>{
      console.log("VALOR RENT>> "+data)
      console.log(data.data.from_station)
      setRent(data)

      window.sessionStorage.setItem('isRenting', true)
      setIsRenting(true)
    })
   
    .catch(err => {
      console.error(err)
    })
}, [setIsRenting,setRent])

const backBike = useCallback(({slot}) => {
  console.log("entra hook-useUser --> rentBike")
  console.log(slot)
  RentService.postUpdateRent(slot.name)
  // .then(setRent)
  .then(data=>{
    console.log("VALOR RENT>> "+data)
    console.log(data.data.from_station)
    setRent(data)
    window.sessionStorage.removeItem('isRenting')
    setIsRenting(null)
  })
 
  .catch(err => {
    console.error(err)
  })
}, [setRent,setIsRenting])


const addFav = useCallback(({slot}) => {
  console.log("Entra addFAv - USERHOOK")

  UserService.postAddFav(slot.id_bike)
    .then(setFavs)
   
    .catch(err => {
      console.error(err)
    })
}, [setFavs]) 
// }, []) 

const unFav = useCallback(({slot}) => {
  console.log("Entra delFAv - USERHOOK")

  console.log(slot.id_bike)

  UserService.DeleteFav(slot.id_bike)
    .then((data) => {

    console.log(data)
      // setFavs()
     })
   
    .catch(err => {
      console.error(err)
    })
// }, [jwt, setFavs]) 
}, []) 


  return {
    isLogged: Boolean(jwt),
    isRenting: Boolean(isRenting),
    // isLoginLoading: state.loading,
    // hasLoginError: state.error,
    check_auth,
    registerForm,
    loginForm,
    logout,
    rentBike,
    backBike,
    addFav,
    unFav,
    favs
    
  }

}