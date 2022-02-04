import {useContext,useEffect, useState} from 'react'
import  StationsContext  from '../context/StationsContext';
import { useStations } from './useStations';
import StationsService from '../services/StationsService'


export function useSingleStations({params}){
    
    // const { singleStation, setSingleStation } = useContext(StationsContext)
    const {stations} = useStations()
    const station = stations.find(single=> single.name === params.name)

    const [singleStation, setSingleStation] = useState(station)

    console.log(station)
    console.log(station.name)


    useEffect(function(){
        
        StationsService.getOne(station.name)
        .then((singleStation) => {
            console.log("useDETAIL-STATIONS")
            console.log(singleStation.data)
           
            setSingleStation(singleStation.data)

      }) 
    },[setSingleStation]); //end_useEffect


    return{
        singleStation
    }
   
       
    
}