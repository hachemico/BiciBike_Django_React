import { useState,useContext,useEffect ,useCallback} from "react"
// import { bikes } from "../pages";
import BikesService from "../services/BikeService";
import BikesContext from "../context/BikeContext"
// import { set } from "react-hook-form";
// import { useStations } from "./useStations";
import StationsService from "../services/StationsService";


export function useBikes(){
    const { bikes, setBikes , available,setAvailable,toUpdateBike,setToUpdateBike} = useContext(BikesContext)
    const [loading, setLoading] = useState(false)

    useEffect(function(){ //admin list all bikes
        setLoading(true)
        BikesService.getAll()
        .then((bikes) => {
            setLoading(false)
            setBikes(bikes.data.bikes)
      }) 
      },[setLoading,available,setAvailable,toUpdateBike]); 


    const changeAvailable = useCallback(({bikeValue}) => { // cambiar estado available
    
        BikesService.available(bikeValue)
        
        .then(setAvailable)
        .catch(err => {
          console.error(err)
        })
    }, [setAvailable])

    const createBike = useCallback((param) => { // cambiar estado available
    
        BikesService.create(param)
        
        .then((data) =>{

            let slot = data.data
            StationsService.update_Slot({slot})
        })
        .catch(err => {
          console.error(err)
        })
    }, [])

    const updateBike = useCallback((param) => { // cambiar estado available
    
        BikesService.update(param)
        .then((data) =>{
            setToUpdateBike(data)
            console.log(data)
        })
        .catch(err => {
          console.error(err)
        })
    }, [setToUpdateBike])

    const deleteBike = useCallback((param) => { // cambiar estado available
    
        BikesService.delete(param)
        .then((data) =>{
            setToUpdateBike()
            console.log(data)
        })
        .catch(err => {
          console.error(err)
        })
    }, [setToUpdateBike])

    return{
        loading: loading,
        bikes:bikes,
        changeAvailable,
        createBike,
        updateBike,
        deleteBike,
    }
    
}