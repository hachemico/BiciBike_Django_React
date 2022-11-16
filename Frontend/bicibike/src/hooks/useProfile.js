import { useState,useContext,useEffect ,useCallback} from "react";
import UserContext from "../context/UserContext";
import UserService from '../services/UserService';

export default function useProfile(){


const updateProfile = useCallback(({params}) => {

    UserService.updateProfile(params)
        .then((data) => {
            console.log(data);
        // setProfile(data);
        })
        
        .catch(err => {
        console.error(err)
        })
    }, []) 


return {
    updateProfile
    }
}