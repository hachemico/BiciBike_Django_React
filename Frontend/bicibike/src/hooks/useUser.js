import { useState,useContext,useCallback } from "react";
import LoginService from "../services/LoginService";
import RegisterService from "../services/RegisterService";
import UserContext from "../context/UserContext";

import  RentContext from '../context/RentContext'
import { useNavigate } from 'react-router-dom';
import UserService from '../services/UserService';
import RentService from '../services/RentService';


export default function useUser(){

const { jwt, setJWT,favs,setFavs,isRenting,setIsRenting,auxFavorite,setAuxFavorite,admin,setAdmin} = useContext(UserContext)
const {rent,setRent} = useContext(RentContext)
const {user,setUser} = useContext(RentContext)
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

const registerForm = useCallback(({email, password, username}) => {
  
    setState({ loading: true, error: false,loadingUser: false });
    RegisterService.postRegister( username, email, password )
        .then((data) => {
          
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
    
    window.sessionStorage.removeItem('token')
    setJWT(null)
    setAdmin(null)
    setUser(null)
  }, [jwt,setJWT])

  const check_auth = () => {
    
    if(window.sessionStorage.getItem('token')){
      return true
    }
    return false
  }

  const isAdmin = useCallback(()=>{
    
    UserService.isAdmin()
    .then((data)=>{
          
          if(data.data.user.is_staff===true){
            setAdmin(true)
            setUser(data.data.user)
          }else{
            setAdmin(null)
          }
    })
    .catch((err) => {
      console.log(err);
      setState({loading: false, error: true })
    });

  })


  const rentBike = useCallback(({slot}) => {

    RentService.postRent(slot.name)
    .then(data=>{
      setRent(data)
      window.sessionStorage.setItem('isRenting', true)
      setIsRenting(true)
    })
   
    .catch(err => {
      console.error(err)
    })
}, [setIsRenting,setRent])

const backBike = useCallback(({slot}) => {

  RentService.postUpdateRent(slot.name)
  .then(data=>{

    setRent(data)
    window.sessionStorage.removeItem('isRenting')
    setIsRenting(null)
  })
 
  .catch(err => {
    console.error(err)
  })
}, [setRent,setIsRenting])


const addFav = useCallback(({slot}) => {
  UserService.postAddFav(slot.bike.serialNumber)
  .then((data) => {
    setAuxFavorite(data);
   })
   
    .catch(err => {
      console.error(err)
    })
}, [setFavs,favs]) 


const unFav = useCallback(({slot}) => {
 
  UserService.deleteFav(slot.bike.serialNumber)
    .then((data) => {
      setAuxFavorite(data);
     })
   
    .catch(err => {
      console.error(err)
    })
}, [setFavs,favs]) 


  return {
    isLogged: Boolean(jwt),
    isRenting: Boolean(isRenting),
    check_auth,
    registerForm,
    loginForm,
    logout,
    rentBike,
    backBike,
    addFav,
    unFav,
    isAdmin
    
  }

}