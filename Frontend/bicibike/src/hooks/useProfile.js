import { useState,useContext,useEffect ,useCallback} from "react";
import UserContext from "../context/UserContext";
import ToastrContext from "../context/ToastrContext";
import UserService from '../services/UserService';

export default function useProfile(){

    const { auxBio, setAuxBio} = useContext(UserContext);
    const { tostr, setToastr} = useContext(ToastrContext);

const updateProfile = useCallback((params) => {

    UserService.updateProfile(params)
        .then((data) => {
            console.log("RESPUESTA UPDATE PROFILE!");
            console.log(data);
            setToastr({state:'success', message:'Perfil actualizado correctamente!'});
            setAuxBio(data);
        })
        
        .catch(err => {
        console.error(err)
        })
    }, []) 


return {
    updateProfile
    }
}