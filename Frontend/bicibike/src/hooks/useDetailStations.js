import {useEffect, useState} from 'react'
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
    const [loading, setLoading]     = useState(false)

    useEffect(function(){
     
        if(!station){
            setLoading(true);
            StationsService.getOne(params.name)
            .then((singleStation) => {
                console.log("useDETAIL-STATIONS")
                console.log(singleStation.data)
                setLoading(false)
                setSingleStation(singleStation.data)

            }) 
        }
    },[setSingleStation,params,station]); //end_useEffect


    return{
        singleStation,
        loading
    }
   
       
    
}