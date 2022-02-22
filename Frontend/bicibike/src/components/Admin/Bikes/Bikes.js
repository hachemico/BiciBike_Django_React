import React, { useContext ,useState} from "react";
import { Button } from "react-bootstrap";
import { useBikes } from "../../../hooks/useBikes";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { useForm } from "react-hook-form";

export default function Bike({bike}){

    const {changeAvailable,updateBike,deleteBike} = useBikes()
    const [show, setShow] = useState(false);

    const[serialNumber,setSerialNumber] = useState("")
    const[station, setStation] = useState("")
    const[slot,setSlot] = useState("")
    const[atUse,setAtUse]=useState("")
    const[available,setAvailable]=useState("")

    const { handleSubmit} = useForm();


    let valueAvailable = ' '
    let valueAt_use = ' '
    let bikeValue = ''

    bike.available === true ? valueAvailable = "En Servicio": valueAvailable="Fuera Servicio"
    bike.at_use === true ? valueAt_use = "En Uso": valueAt_use="Estacionada"
    bikeValue = bike
    console.log(bikeValue)
    const toAvailable = () =>{

        changeAvailable({bikeValue})
    }
  

    const toDelete = (bikeValue) =>{
        console.log("click delete")
        console.log(bikeValue.bikeValue)
        let param = bikeValue.bikeValue
        // let param={"bike":{"serialNumber":bikeValue.bikeValue.serialNumber}}
        console.log(param)
        deleteBike(param)

    }



    let buttonAvailable = bike.available === true
                            ? <Button variant="success" onClick={() => toAvailable({bikeValue})}>Estado</Button>
                            : <Button variant="warning" onClick={() => toAvailable({bikeValue})}>Estado</Button>

    let buttonUpdate = (<button type="button" class="btn btn-warning" onClick={() => handleShow(bikeValue)}>Actualizar Bike</button>)
    let buttonDelete = (<button type="button" class="btn btn-danger" onClick={() => toDelete({bikeValue})}>Borrar</button>)
  

    const handleClose = () => { console.log("HandleClose")
        setShow(false)
        console.log("entra HandleClose")
    }

    const updateSubmit =(event)=>{
        // event.preventDefault()
        console.log("entra HandleSubmit")
        console.log(event)
        console.log(serialNumber)
        console.log(slot)
        console.log(station)
        console.log(available)
        console.log(atUse)
        let valueAvailable=''
        let valueAtUse=''

       if( available=== true || available === "true"){
        valueAvailable = "True"
        console.log("AAAA")
       }else{
        valueAvailable = "False"
        console.log("BBBBB")
       }

       if(atUse===true || atUse === "true"){
            valueAtUse= "True"
       }else{
        valueAtUse = "False"
       }
       
        let param = {"bike":{"serialNumber":serialNumber,
                            "slot":slot,
                            "station":station,
                            "available":valueAvailable,
                            "at_use":valueAtUse
                    }}
        console.log(param)
        updateBike(param)
        setShow(false)

    }
    const handleShow = (bikeValue) => {
        console.log("HandleShow")
        console.log("valor BikeValue")
        console.log(bikeValue)
        setSerialNumber(bikeValue.serialNumber)
        setSlot(bikeValue.slot)
        setStation(bikeValue.station)
        setAtUse(bikeValue.at_use)
        setAvailable(bikeValue.available)
        setShow(true)

        console.log("entra handleShow")
    
    }

    return(

        <>
        <tr>
            <td>{bike.serialNumber}</td>
            <td>{bike.station}</td>
            <td>{bike.slot}</td>
            <td>{valueAvailable} | {buttonAvailable}</td>
            <td>{valueAt_use}</td>
            <td>
                <div className="d-flex justify-content-around">
                    {/* {buttonCreate} */}
                    {buttonUpdate}
                    {buttonDelete}
                </div>
            </td>
            <td>
                {/* {ModalUpdate} */}
            </td>
        </tr>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>BiciBike | Añadir Bici</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            <Form onSubmit={handleSubmit(updateSubmit)}>
                <Form.Group className="mb-3" controlId="formSerialNumber">
                    <Form.Label>Numero Serie</Form.Label>
                    <Form.Control type="string" placeholder="Numero Serie" value={serialNumber} onChange={(e) => setSerialNumber(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formStation">
                    <Form.Label>Estacion</Form.Label>
                    <Form.Control type="string" placeholder="Estacion" value={station} onChange={(e) => setStation(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formSlot">
                    <Form.Label>Slot</Form.Label>
                    <Form.Control type="string" placeholder="Slot" value={slot} onChange={(e) => setSlot(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAvailable">
                   
                {/* < Form.Check type="checkbox" checked={available} label="Disponible"  onChange={(e) => setAvailable(e.target.value)}/> */}
                <label>
                <div> Disponible:</div>
               
                <select value={available} onChange={(e) => setAvailable(e.target.value)}>
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
                </label>    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAtUse">
                    {/* <Form.Check type="checkbox" checked={atUse} label="En Uso" onChange={(e) => setAtUse(e.target.value)}/> */}
                    <label>
                    <div>En uso:</div>
                    <select value={atUse} onChange={(e) => setAtUse(e.target.value)}>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                    </label>   
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Modal.Body>
      </Modal>   
        
        </>
    )
}