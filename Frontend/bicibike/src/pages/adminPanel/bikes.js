import React, { useContext ,useState} from "react";
import {useBikes} from "../../hooks/useBikes"
import Bike from "../../components/Admin/Bikes/Bikes"
import Table from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function Bikes(){

    const {createBike} = useBikes()
    const {bikes,setBikes}= useBikes();
    console.log(bikes)
    
    const [show, setShow] = useState(false);

    const[serialNumber,setSerialNumber] = useState("")
    const[station, setStation] = useState("")
    const[slot,setSlot] = useState("")
    const[atUse,setAtUse]=useState("")
    const[available,setAvailable]=useState("")

    const { handleSubmit} = useForm();

   

    const handleClose = () => { console.log("HandleClose")
        setShow(false)
    }
    const handleShow = () => {console.log("HandleShow")
        setShow(true)
    }
    const createSubmit =(event)=>{
       
        let valueAvailable = ''
        let valueAtUse = ''
        available === 'on' ? valueAvailable = 'True': valueAvailable = 'False'
        atUse === 'on' ? valueAtUse = 'True': valueAtUse = 'False'
        
        let param = {"bike":{"serialNumber":serialNumber,
                            "available":valueAvailable,
                            "at_use":valueAtUse
                    }}
        createBike(param)
        setShow(false)
    }

    

    let buttonCreate = (<button type="button" class="btn btn-info mt-3 mb-3" onClick={() => handleShow()}>Crear Bike</button>)
    
    return(
        <>
            <h2 className="bg-dark mt-2">GESTION BICICLETAS</h2>
            <div>{buttonCreate}</div>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>BiciBike | Añadir Bici</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(createSubmit)}>
                        <Form.Group className="mb-3" controlId="formSerialNumber">
                            <Form.Label>Numero Serie</Form.Label>
                            <Form.Control type="string" placeholder="Numero Serie" onChange={(e) => setSerialNumber(e.target.value)}/>
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="formStation">
                            <Form.Label>Estacion</Form.Label>
                            <Form.Control type="string" placeholder="Estacion" onChange={(e) => setStation(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formSlot">
                            <Form.Label>Slot</Form.Label>
                            <Form.Control type="string" placeholder="Slot" onChange={(e) => setSlot(e.target.value)}/>
                        </Form.Group> */}
                        <Form.Group className="mb-3" controlId="formAvailable">
                            <Form.Check type="checkbox" label="Disponible" onChange={(e) => setAvailable(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formAtUse">
                            <Form.Check type="checkbox" label="En Uso" onChange={(e) => setAtUse(e.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>   


            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Ser.Num</th>
                    <th>Estado | Cambiar</th>
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