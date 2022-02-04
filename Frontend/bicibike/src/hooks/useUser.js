import { useState,useContext,useCallback } from "react";
import LoginService from "../services/LoginService";
import RegisterService from "../services/RegisterService";
import Context from "../context/UserContext";
import { useNavigate } from 'react-router-dom';

export default function useUser(){


const { jwt, setJWT} = useContext(Context)
// const [state, setState] = useState()
const [ setState] = useState()
let navigate = useNavigate();

const loginForm = useCallback(({email, password}) => {
  console.log("entra login")
    setState({loading: true, error: false })
    LoginService.postLogin(email, password)
      .then(jwt => {
          console.log("entra hook-useUser --> login")
          console.log(jwt.data.user.token)
        window.sessionStorage.setItem('jwt', jwt.data.user.token)
        setState({loading: false, error: false })
        setJWT(jwt.data.user.token)
      })
      .catch(err => {
        window.sessionStorage.removeItem('jwt')
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
    window.sessionStorage.removeItem('jwt')
    setJWT(null)
  }, [setJWT])

//   const check_auth = () => {
    
//     if(localStorage.getItem('id_token')){
//       return true
//     }
//     return false
//   }
  console.log("valor booleanJWT")
  console.log(Boolean(jwt))

  return {
    isLogged: Boolean(jwt),
    // isLoginLoading: state.loading,
    // hasLoginError: state.error,
    registerForm,
    loginForm,
    logout
  }

}