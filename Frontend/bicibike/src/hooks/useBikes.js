import { useState,useContext,useEffect ,useCallback} from "react"
import BikesService from "../services/BikeService";
import BikesContext from "../context/BikeContext"
import StationsService from "../services/StationsService";
import ToastrContext from "../context/ToastrContext";

export function useBikes(){
    const { bikes, setBikes , available,setAvailable,toUpdateBike,setToUpdateBike} = useContext(BikesContext)
    const [loading, setLoading] = useState(false)
    const { tostr, setToastr} = useContext(ToastrContext);

    useEffect(function(){ //admin list all bikes
        setLoading(true)
        BikesService.getAll()
        .then((bikes) => {
            setLoading(false)
            setBikes(bikes.data.bikes)
      }) 
    },[available,setAvailable,toUpdateBike]);
     
      
    const changeAvailable = useCallback(({bikeValue}) => { // cambiar estado available
    
        BikesService.available(bikeValue)
        
        .then(setAvailable)
        .then((data) => {
            setAvailable()
            setToastr({state:'success', message:"Estado Actualizado."});
      }) 
        .catch(err => {
          console.error(err)
          setToastr({state:'error', message:"Error al actualizar."});
        })
    }, [setAvailable])

    const createBike = useCallback((param) => { 
    
        BikesService.create(param)
        
        .then((data) =>{
            setToastr({state:'success', message:"Bike creada con éxito."});
            setToUpdateBike(data)
        })
        .catch(err => {
          console.error(err)
          setToastr({state:'error', message:"Error al crear."});
        })
    }, [])

    const updateBike = useCallback((param) => {
    
        BikesService.update(param)
        .then((data) =>{
            setToastr({state:'success', message:"Bike actualizada con éxito."});
            setToUpdateBike(data)
            console.log(data)
        })
        .catch(err => {
          console.error(err)
          setToastr({state:'error', message:"Error al actualizar."});
        })
    }, [setToUpdateBike])

    const deleteBike = useCallback((param) => {
    
        BikesService.delete(param)
        .then((data) =>{
            setToastr({state:'error', message:"Eliminada con éxito."});
            setToUpdateBike(data)
            console.log(data)
        })
        .catch(err => {
          console.error(err);
          setToastr({state:'error', message:"Error al eliminar."});
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