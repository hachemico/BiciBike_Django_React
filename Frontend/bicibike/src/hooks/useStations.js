import {useContext, useEffect, useState} from 'react'
import  StationsContext  from '../context/StationsContext';
import StationsService from '../services/StationsService'

export function useStations(){

    const { stations, setStations } = useContext(StationsContext)
    // const [error, setError]         = useState(false);
    const {loading, setLoading}     = useState(false)

    useEffect(function(){
      // setLoading(true)
      StationsService.get()
      .then((stations) => {
          console.log("useSTATIONS")
            console.log(stations.data.stations)
            
            // setLoading(false)
            setStations(stations.data.stations)
  
      // },[loading,stations]) //end_useEffect
    }) 
    },[setLoading,setStations]); //end_useEffect



      return {
        loading: loading,
        stations: stations
        // error: error,
        };
}