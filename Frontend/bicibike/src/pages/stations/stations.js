import React from 'react'
// import axios from 'axios';
import { useStations } from '../../hooks/useStations';
import StationsList from '../../components/ListStations/listStations';

export default function Stations() {

    const {stations} = useStations();
    console.log(stations)

return (
   <StationsList stations={stations}/>
)
}