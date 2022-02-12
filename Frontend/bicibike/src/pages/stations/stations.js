import React from 'react'
// import axios from 'axios';
import { useStations } from '../../hooks/useStations';
import StationsList from '../../components/ListStations/listStations';
import Spinner from '../../components/Spinner/spinner';

export default function Stations() {

    const {stations,loading} = useStations();
    console.log(stations)

return (
    <>
    {loading
        ? <Spinner/>
        : <StationsList stations={stations}/>
    }
    </>
   )
}