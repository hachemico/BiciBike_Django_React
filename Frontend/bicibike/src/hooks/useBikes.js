import { useState,useContext,useEffect ,useCallback} from "react"
import BikesService from "../services/BikeService";
import BikesContext from "../context/BikeContext"
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
    //   },[setLoading,available,setAvailable,toUpdateBike]); 
    },[available,setAvailable,toUpdateBike]);
     
      
    const changeAvailable = useCallback(({bikeValue}) => { // cambiar estado available
    
        BikesService.available(bikeValue)
        
        .then(setAvailable)
        .catch(err => {
          console.error(err)
        })
    }, [setAvailable])

    const createBike = useCallback((param) => { 
    
        BikesService.create(param)
        
        .then((data) =>{

            let slot = data.data
            StationsService.update_Slot({slot})
        })
        .catch(err => {
          console.error(err)
        })
    }, [])

    const updateBike = useCallback((param) => {
    
        BikesService.update(param)
        .then((data) =>{
            setToUpdateBike(data)
            console.log(data)
        })
        .catch(err => {
          console.error(err)
        })
    }, [setToUpdateBike])

    const deleteBike = useCallback((param) => {
    
        BikesService.delete(param)
        .then((data) =>{
            setToUpdateBike(data)
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