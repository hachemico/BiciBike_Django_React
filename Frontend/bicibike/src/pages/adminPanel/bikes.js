import React from "react";
import {useBikes} from "../../hooks/useBikes"
import Bike from "../../components/Admin/Bikes/Bikes"
import Table from 'react-bootstrap/Table'

export default function Bikes(){

    const {bikes,setBikes}= useBikes();
    console.log(bikes)


    return(
        <>
            <h2 className="bg-dark mt-2">GESTION BICICLETAS</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Ser.Num</th>
                    <th>Estación</th>
                    <th>Slot</th>
                    <th>Estado</th>
                    <th>En uso</th>
                    <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {
                    
                    bikes.map((bike,index)=>(
                            <Bike key={index} bike={bike} ></Bike>
                        ))
                }
                </tbody>
            </Table>
        </>
    )
}