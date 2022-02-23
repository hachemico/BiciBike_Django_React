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
          setLoading(false)
          setStations(stations.data.stations)
    }) 
    },[setLoading,setStations,rent]); //end_useEffect

      return {
        loading: loading,
        stations: stations,
        // updateSlot
        // error: error
        };
}