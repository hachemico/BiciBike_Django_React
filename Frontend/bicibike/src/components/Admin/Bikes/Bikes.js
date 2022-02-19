import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useBikes } from "../../../hooks/useBikes";

export default function Bike({bike}){

    const {changeAvailable} = useBikes()

    let valueAvailable = ' '
    let valueAt_use = ' '
    let bikeValue = ''

    bike.available === true ? valueAvailable = "En Servicio": valueAvailable="Fuera Servicio"
    bike.at_use === true ? valueAt_use = "En Uso": valueAt_use="Estacionada"
    bikeValue = bike
    
    const toAvailable = () =>{

        changeAvailable({bikeValue})
    }
    let buttonAvailable = bike.available === true
                            ? <Button variant="info" onClick={() => toAvailable({bikeValue})}>Disable</Button>
                            : <Button variant="info" onClick={() => toAvailable({bikeValue})}>Enable</Button>

    return(

        <>
        <tr>
            <td>{bike.serialNumber}</td>
            <td>{bike.station}</td>
            <td>{bike.slot}</td>
            <td>{valueAvailable} | {buttonAvailable}</td>
            <td>{valueAt_use}</td>
            <td>BUTTONS CRUD</td>
        </tr>
            
        
        </>
    )
}