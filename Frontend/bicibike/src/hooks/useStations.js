import {useContext, useEffect, useState,useCallback} from 'react'
import  StationsContext  from '../context/StationsContext';
import StationsService from '../services/StationsService'

export function useStations(){

    const { stations, setStations } = useContext(StationsContext)
    const { rent, setRent } = useContext(StationsContext)
    // const [error, setError]         = useState(false);
    const [loading, setLoading]     = useState(false)
  

    useEffect(function(){
      setLoading(true)
      StationsService.get()
      .then((stations) => {
          console.log("useSTATIONS")
            console.log(stations.data.stations)
            
            setLoading(false)
            setStations(stations.data.stations)
  
      // },[loading,stations]) //end_useEffect
    }) 
    },[setLoading,setStations,rent]); //end_useEffect

  //   const updateSlot = useCallback((param) => { // cambiar estado available
    
  //     StationsService.update_Slot(param)
      
  //     .then((data) =>{
  //         console.log(data)
        
  //     })
  //     .catch(err => {
  //       console.error(err)
  //     })
  // }, [])

      return {
        loading: loading,
        stations: stations,
        // updateSlot
        // error: error
        };
}