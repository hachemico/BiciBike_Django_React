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
    // const[station, setStation] = useState("")
    // const[slot,setSlot] = useState("")
    const[atUse,setAtUse]=useState("")
    const[available,setAvailable]=useState("")

    const { handleSubmit} = useForm();


    let valueAvailable = ' '
    let valueAt_use = ' '
    let bikeValue = ''

    bike.available === true ? valueAvailable = "En Servicio": valueAvailable="Fuera Servicio"
    bike.at_use === true ? valueAt_use = "En Uso": valueAt_use="Estacionada"
    bikeValue = bike
    
    const toAvailable = () =>{

        changeAvailable({bikeValue})
    }
  

    const toDelete = (bikeValue) =>{
     
        let param = bikeValue.bikeValue
        console.log(param)
        deleteBike(param)
    }

    let buttonAvailable = bike.available === true
                            ? <Button variant="success" onClick={() => toAvailable({bikeValue})}>Estado</Button>
                            : <Button variant="warning" onClick={() => toAvailable({bikeValue})}>Estado</Button>

    let buttonUpdate = (<button type="button" class="btn btn-warning" onClick={() => handleShow(bikeValue)}>Edit Bike</button>)
    let buttonDelete = (<button type="button" class="btn btn-danger" onClick={() => toDelete({bikeValue})}>Borrar</button>)
  

    const handleClose = () => { console.log("HandleClose")
        setShow(false)
    }

    const updateSubmit =(event)=>{
    
        let valueAvailable=''
        let valueAtUse=''

        if( available=== true || available === "true"){
                valueAvailable = "True"
        }else{
                valueAvailable = "False"
        }

        if(atUse===true || atUse === "true"){
                valueAtUse= "True"
        }else{
                valueAtUse = "False"
        }
       
        let param = {"bike":{"serialNumber":serialNumber,
                            "available":valueAvailable,
                            "at_use":valueAtUse
                    }}
        updateBike(param)
        setShow(false)

    }
    const handleShow = (bikeValue) => {     //guardamos el valor en el state para poder aplicarlo en el update.
        
        setSerialNumber(bikeValue.serialNumber)
        setAtUse(bikeValue.at_use)
        setAvailable(bikeValue.available)
        setShow(true)
    }

    return(

        <>
        <tr>
            <td>{bike.serialNumber}</td>
            {/* <td>{bike.station}</td>
            <td>{bike.slot}</td> */}
            <td>{valueAvailable} | {buttonAvailable}</td>
            <td>{valueAt_use}</td>
            <td>
                <div className="d-flex justify-content-around">
                    {buttonUpdate}
                    {buttonDelete}
                </div>
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

                <Form.Group className="mb-3" controlId="formAvailable">
                    <label>
                    <div> Disponible:</div>
                
                    <select value={available} onChange={(e) => setAvailable(e.target.value)}>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                    </label>    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAtUse">
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