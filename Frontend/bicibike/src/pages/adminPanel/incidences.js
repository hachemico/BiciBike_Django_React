import React, { useContext } from "react";
import { useEffect } from "react";
import { useIncidences } from "../../hooks/useIncidences";
import  IncidencesContex  from "../../context/IncidenceContext";
import Table from 'react-bootstrap/Table'
import Incidences from "../../components/Admin/Incidences/Incidences";


export default function Incidence(){

    const {incidences} = useIncidences()

    console.log(incidences)
    console.log(incidences.incidences)
return(

    <>
    
    <Table striped bordered hover>
        <thead>
            <tr>
            <th>ID</th>
            <th>Usuario</th>
            <th>Descripcion</th>
            <th>Fecha</th>
            <th>Estado</th>
            </tr>
        </thead>

        {
            incidences.map((incidence,index)=>(
            <Incidences key={index} incidence={incidence} index={index}/>
             )) 
        }
       
    </Table>
    </>

)


}