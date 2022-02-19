import {useEffect, useState,useContext} from 'react'
import  RentContext  from '../context/RentContext';
import { useStations } from './useStations';
import StationsService from '../services/StationsService'


export function useSingleStations({params}){
    console.log(params)
    console.log(params.name)
    
    const {stations} = useStations()
    console.log(stations)
    const station = stations.find(single=> single.name === params.name)

    const {rent,setRent} = useContext(RentContext)
    const [singleStation, setSingleStation] = useState(station)
    const [loading, setLoading] = useState(false)

    useEffect(function(){
        
        setLoading(true);
        console.log("PARAMS")
        console.log(params)
        StationsService.getOne(params.name)
        .then((singleStation) => {
            console.log("useDETAIL-STATIONS")
            console.log(singleStation.data)
            setLoading(false)
            setSingleStation(singleStation.data)    
        })  
    },[setSingleStation,params,station,rent]); //end_useEffect


    return{
        singleStation,
        loading
    }
   
       
    
}