import {useEffect, useState,useContext} from 'react'
import  RentContext  from '../context/RentContext';
import { useStations } from './useStations';
import StationsService from '../services/StationsService'


export function useSingleStations({params}){
    
    const {stations} = useStations()
    const station = stations.find(single=> single.name === params.name)

    const {rent,setRent} = useContext(RentContext)
    const [singleStation, setSingleStation] = useState(station)
    const [loading, setLoading] = useState(false)

    useEffect(function(){
        
        setLoading(true);
      
        StationsService.getOne(params.name)
        .then((singleStation) => {
            console.log("useDETAIL-STATIONS")
            console.log(singleStation.data)
            setLoading(false)
            setSingleStation(singleStation.data)    
        })  
    },[setLoading,setSingleStation,params,station,rent]); //end_useEffect


    return{
        singleStation,
        loading
    }
   
       
    
}