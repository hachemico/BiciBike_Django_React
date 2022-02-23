import React, { useContext } from "react";
import { useEffect } from "react";
import { useIncidences } from "../../hooks/useIncidences";
import  IncidencesContex  from "../../context/IncidencesContext";
import Table from 'react-bootstrap/Table'
import Incidences from "../../components/Admin/Incidences/Incidences";


export default function Incidence(){

    const {incidences} = useIncidences()
    
return(

    <>
    
    <Table striped bordered hover>
        <thead>
            <tr>
            <th>ID Incidencia</th>
            <th>ID Bici</th>
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