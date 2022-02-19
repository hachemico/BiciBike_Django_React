import { useState,useContext,useEffect ,useCallback} from "react"
import { bikes } from "../pages";
import BikesService from "../services/BikeService";
import BikesContext from "../context/BikeContext"
import { set } from "react-hook-form";

export function useBikes(){
    const { bikes, setBikes , available,setAvailable} = useContext(BikesContext)
    const [loading, setLoading] = useState(false)


    useEffect(function(){ //admin list all bikes
        setLoading(true)
        BikesService.getAll()
        .then((bikes) => {
            setLoading(false)
            setBikes(bikes.data.bikes)
      }) 
      },[setLoading,available,setAvailable]); 


    const changeAvailable = useCallback(({bikeValue}) => { // cambiar estado available
    
        BikesService.available(bikeValue)
        
        .then(setAvailable)
        .catch(err => {
          console.error(err)
        })
    }, [])

    return{
        loading: loading,
        bikes:bikes,
        changeAvailable,
    }
}