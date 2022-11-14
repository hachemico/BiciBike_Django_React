import React,{useContext,useState} from "react";
import { Button} from "react-bootstrap";
import { useIncidences } from "../../../hooks/useIncidences";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { useForm } from "react-hook-form";
import SlotImg from '../../../assets/SLOT.png'

export default function Incidences({incidence,index}){

const {updateIncidence} = useIncidences()
const [show, setShow] = useState(false);

const {updateIncidenceCheckedState} = useIncidences()
const toUpdate = (value) => {

    let params={
        "id":value.incidence.id,
        "status":"Resuelta"
    }
    updateIncidence(params)
}

const handleClose = (IncidenceId) => { 
    setShow(false)
    updateIncidenceCheckedState(IncidenceId);
}

const handleShow = () => { setShow(true)}

let color1 = <tbody>
                <tr>
                    <td>{incidence.id}</td>
                    <td>{incidence.bike}</td>
                    <td>{incidence.user}</td>
                    <td>{incidence.description}</td>
                    <td>{incidence.created_at}</td>
                    {
                    incidence.status==='Pendiente'
                                        ? <td className="bg-warning d-flex justify-content-around align-items-center" ><Button variant="success" onClick={() => handleShow()}>Ver</Button>
                                        {incidence.status} <Button variant="secondary" onClick={() => toUpdate({incidence})}>Finalizar Incidencia</Button></td>
                                        : <td className="bg-success">{incidence.status}</td>
                    }
                </tr>
            </tbody>;

let color2 = <tbody>
                    <tr className="bg-primary">
                        <td>{incidence.id}</td>
                        <td>{incidence.bike}</td>
                        <td>{incidence.user}</td>
                        <td>{incidence.description}</td>
                        <td>{incidence.created_at}</td>
                        {
                        incidence.status==='Pendiente'
                                            ? <td className="bg-warning d-flex justify-content-around align-items-center" ><Button variant="success" onClick={() => handleShow()}>Ver</Button>
                                            {incidence.status} <Button variant="secondary" onClick={() => toUpdate({incidence})}>Finalizar Incidencia</Button></td>
                                            : <td className="bg-success">{incidence.status}</td>
                        }
                    </tr>
            </tbody>;


return(
    <>
        {
            incidence.checked === false ? color2 : color1
        }
        <Modal show={show} onHide={() => handleClose(incidence.id)}>
        <Modal.Header closeButton>
            <Modal.Title>BiciBike | Incidencia nº {incidence.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
            <div className="d-flex justify-content-center">
                <img variant="top" src={SlotImg} className=" img-fluid img-thumbnail " alt="Imagen Panel Admin Gestionar Estaciones" />
            </div>
            <div className="d-flex justify-content-center mt-4">
                <tbody>
                        <tr className="ml-2"><td><b>Nº Incidencia:</b></td> <td>{incidence.id}</td></tr>
                        <tr className="mt-1"><td><b>Nº Serie Bicileta:</b></td> <td>{incidence.bike}</td></tr>
                        <tr className="mt-1"><td><b>ID Usuario:</b></td> <td>{incidence.user}</td></tr>
                        <tr className="mt-1"><td><b>Descripción:</b></td> <td>{incidence.description}</td></tr>
                        <tr className="mt-1"><td><b>Fecha:</b></td> <td>{incidence.created_at}</td></tr>
                </tbody>
            </div>
            <div className="d-flex justify-content-end mt-4"> <Button variant="secondary" onClick={() => handleClose(incidence.id)}>Cerrar</Button> </div>
        </div>
        </Modal.Body>
        </Modal>   
    </>

)


}