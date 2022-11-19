import { useState,useContext,useCallback } from "react";
import { useNavigate } from 'react-router-dom';

import LoginService from "../services/LoginService";
import RegisterService from "../services/RegisterService";
import UserService from '../services/UserService';
import RentService from '../services/RentService';

import UserContext from "../context/UserContext";
import ToastrContext from "../context/ToastrContext";
import  RentContext from '../context/RentContext'


export default function useUser(){

const { jwt, setJWT,favs,setFavs,isRenting,setIsRenting,auxFavorite,setAuxFavorite,admin,setAdmin,username,setUsername} = useContext(UserContext)
const {rent,setRent,user,setUser} = useContext(RentContext)
const { tostr, setToastr} = useContext(ToastrContext);

const [state, setState] = useState()
let navigate = useNavigate();


const loginForm = useCallback(({email, password}) => {
  console.log("entra login")
    setState({loading: true, error: false })
    LoginService.postLogin(email, password)
      .then(jwt => {

          console.log("entra hook-useUser --> login")
          console.log("VALOR DEL JWT BUSCANDO ERROR LOGIN!");

          console.log(jwt)
          console.log(jwt.data.user)
          let message= "Bienvenido " + jwt.data.user.username;
          setToastr({state:'success', message:message});
          window.sessionStorage.setItem('token', jwt.data.user.token)
      
          setState({loading: false, error: false })
          setJWT(jwt.data.user.token)
          setUsername(jwt.data.user.username)
          window.sessionStorage.setItem('username', jwt.data.user.username)
         
          
          // console.log("VALOR DE USERNAME AL LOGIN"+ username)
      })
      .catch(err => {
        window.sessionStorage.removeItem('token')
        setState({loading: false, error: true })
        setToastr({state:'error', message:"Usuario o contraseña incorrectos"});
        console.error(err)
      })
  }, [setJWT,setState])

const registerForm = useCallback(({email, password, username}) => {
  
    setState({ loading: true, error: false,loadingUser: false });
    RegisterService.postRegister( username, email, password )
        .then((data) => {
          
          if (data.data.user.token){
            setState({loading: false, error: false })
            navigate('/'); // enviamos el usuario a home, aunque podría ir a Login.
            setToastr({state:'success', message:'Registrado correctamente!'});
            //// MOSTRAR  TOASTER MENSAJE REGISTRnaADO CORRECTAMENTE
          }else{
          
            setState({loading: false, error: true });
            setToastr({state:'error', message:'Error - Por favor contacte con un administrador.'});

          }
           
        })
        .catch((err) => {
          console.log(err);
          setState({loading: false, error: true })
          setToastr({state:'error', message:'El usuario ya existe!'});

        });
    },
    [setState,navigate]
  ); 



  const logout = useCallback(() => {
    
    window.sessionStorage.removeItem('token');
    window.sessionStorage.removeItem('username');
    setToastr({state:'success', message:'GRACIAS POR UTILIZAR NUESTROS SERVICIOS!'});
    
    setJWT(null);
    setAdmin(null);
    navigate("/");
    setUser(null);
    
    
    
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


  const getProfile = useCallback(()=>{
    
    UserService.getUserProfile()
    .then((data)=>{
          console.log("UseUSer-Profile valor recibido>> ");
          console.log(data);

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
      setToastr({state:'success', message:'Bicicleta alquilada!'});
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
    setToastr({state:'success', message:'Alquiler finalizado Correctamente!'});
  })
 
  .catch(err => {
    console.error(err)
  })
}, [setRent,setIsRenting])


const addFav = useCallback(({slot}) => {
  UserService.postAddFav(slot.bike.serialNumber)
  .then((data) => {
    setAuxFavorite(data);
    setToastr({state:'info', message:'Añadida a Favoritos!'});
   })
   
    .catch(err => {
      console.error(err)
    })
}, [setFavs,favs]) 


const unFav = useCallback(({slot}) => {
 
  UserService.deleteFav(slot.bike.serialNumber)
    .then((data) => {
      setAuxFavorite(data);
      setToastr({state:'info', message:'Eliminada de tus Favoritos!'});
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
    isAdmin,
    getProfile

  }

}