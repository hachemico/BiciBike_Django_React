import React from "react";
import { Button} from "react-bootstrap";
import { useIncidences } from "../../../hooks/useIncidences";


export default function Incidences({incidence,index}){

const {updateIncidence} = useIncidences()

const toUpdate = (value) => {

    let params={
        "id":value.incidence.id,
        "status":"Resuelta"
    }
    updateIncidence(params)
}
return(

    <>
    <tbody>
            <tr>
            <td>{incidence.id}</td>
            <td>{incidence.bike}</td>
            <td>{incidence.user}</td>
            <td>{incidence.description}</td>
            <td>{incidence.created_at}</td>
            {
               incidence.status=='Pendiente'
                                ? <td className="bg-warning d-flex justify-content-around align-items-center" > {incidence.status} <Button variant="secondary" onClick={() => toUpdate({incidence})}>Finalizar Incidencia</Button></td>
                                : <td className="bg-success">{incidence.status}</td>
            }
            </tr>
        </tbody>
    </>

)


}