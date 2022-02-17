import React from 'react'
import Carousel from '../../components/Carousel/carousel';
// import axios from 'axios';
import { useStations } from '../../hooks/useStations';
// import StationsList from '../../components/ListStations/listStations';

export default function Home() {

    const {stations} = useStations();
    console.log(stations)

return (
//    <StationsList stations={stations}/>
<div>

    < Carousel/>
    
</div>
   
)
}