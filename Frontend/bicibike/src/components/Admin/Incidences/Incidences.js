import React ,{useState,useContext}from "react";
import IncidenceContext from "../../../context/IncidenceContext"
import { Button, Modal ,Form} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useIncidences } from "../../../hooks/useIncidences";


export default function Incidences({incidence,index}){

console.log(incidence)
console.log(index)

const [show, setShow] = useState(false);
const [description,setDescription] = useState("")
const { handleSubmit} = useForm();
const {updateIncidence} = useIncidences()

const handleClose = () => { console.log("HandleClose")
    setShow(false)
    console.log("entra HandleClose")
}
const handleShow = () => {console.log("HandleShow")
      setShow(true)
      console.log("entra handleShow")
}
const toUpdate = (value) => {

    console.log("entra Update")
    console.log(value)
    let params={
        "id":value.incidence.id,
        "status":"Resuelta"
    }
    console.log(params)
updateIncidence(params)


}

return(

    <>
    
    <tbody>
            <tr>
            <td>{incidence.id}</td>
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

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>BiciBike | Gestión Incidencias Bicicletas</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            <Form onSubmit={handleSubmit(toUpdate)}>
                <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Añade tu Incidencia</Form.Label>
                </Form.Group>
               
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
            </Modal.Body>
      </Modal>  
    
    </>

)


}