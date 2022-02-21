import React from 'react'
import Carousel from '../../components/Carousel/carousel';
// import axios from 'axios';
import { useStations } from '../../hooks/useStations';
import CookieConsent from "react-cookie-consent";
// import StationsList from '../../components/ListStations/listStations';

export default function Home() {

    const {stations} = useStations();
    console.log(stations)

return (
//    <StationsList stations={stations}/>
<div>
    <CookieConsent buttonText="Aceptar Todo"
                    cookieName="myAwesomeCookieName2"
                    style={{ background: "#2B373B" }}
                    buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                    expires={150}>
        This web hace uso de Coockies para la mejora del servicio.
    </CookieConsent>
    < Carousel/>
    
</div>
   
)
}