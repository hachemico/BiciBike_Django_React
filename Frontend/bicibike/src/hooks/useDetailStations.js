import {useContext,useEffect, useState} from 'react'
// import  StationsContext  from '../context/StationsContext';
import { useStations } from './useStations';
import StationsService from '../services/StationsService'


export function useSingleStations({params}){
    console.log(params.name)
    // const { singleStation, setSingleStation } = useContext(StationsContext)
    const {stations} = useStations()
    console.log(stations)
    const station = stations.find(single=> single.name === params.name)

    const [singleStation, setSingleStation] = useState(station)



    useEffect(function(){
        console.log("aaaaaaaaa")
        if(!station){
            console.log("entra if")
         
            console.log(params)
            StationsService.getOne(params.name)
            .then((singleStation) => {
                console.log("useDETAIL-STATIONS")
                console.log(singleStation.data)
            
                setSingleStation(singleStation.data)

            }) 
        }
    },[setSingleStation,params.name]); //end_useEffect


    return{
        singleStation
    }
   
       
    
}