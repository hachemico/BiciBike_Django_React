import React,{useContext,useState} from "react";
import './slot.css'
import SlotImg from '../../assets/SLOT.png'
import OutImg from '../../assets/OUTSERVICE.png'
import Button from 'react-bootstrap/Button'
import useUser from "../../hooks/useUser";
import UserContext from "../../context/UserContext"
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { useForm } from "react-hook-form";
import { useIncidences } from "../../hooks/useIncidences";

export default function Slot ({slot,index}) {

  const {check_auth,addFav,rentBike,backBike} = useUser()
  const {isRenting,setIsRenting} = useContext(UserContext)

  const [show, setShow] = useState(false);
  const [description,setDescription] = useState("")
  const { handleSubmit} = useForm();

  const {createIncidence}=useIncidences()


  const toRent = ({slot}) => {
  
    if(check_auth() === true){ //comprovamos que hay token.

      rentBike({slot})
    }else{
      //MOSTRAR TOASTER "Para realizar un alquiler, tiene que estar registrado." 
    }
  }
  const backRent = ({slot}) => { //devolver alquiler
  
    if(check_auth() === true){ 

      backBike({slot})

    }else{
      //MOSTRAR TOASTER "Para realizar un alquiler, tiene que estar registrado." 
    }
  }


  const toFav = ({slot}) => {

    if(check_auth()=== true){ 

      addFav({slot})

    }else{

      //MOSTRAR TOASTER "Para realizar un alquiler, tiene que estar registrado." 
    }

  }

  const toIncidence = (event) => {

    if(check_auth()=== true){ //comprovamos que hay token.

      let params={"incidence":
              {
                "bike":slot.bike.serialNumber,
                "description":description
              }}
      createIncidence(params)
      setShow(false)
    }else{
      //MOSTRAR TOASTER "Para realizar un alquiler, tiene que estar registrado." 
    }

  }


    //RENDERIZA LOS BOTTONES DEPENDIENDO DE SI HAY ALQUILER O NO.
  let rentButton1 =
          slot.bike !== null
            ? <Button variant="success" onClick={() => toRent({slot})}>Alquilar</Button>
            : <Button variant="warning" disabled >SLOT VACIO</Button>;

  let rentButton2 =
          slot.bike !== null
            ? <Button variant="success" disabled > Alquilar</Button>
            : <Button variant="warning" onClick={() => backRent({slot})}>SLOT VACIO</Button>;
              
  let bikeID = slot.bike !== null
            ? <h5>Bicicleta N?? {slot.bike.serialNumber}</h5> 
            : <h5>BiciBike</h5>;
  
  let rentButton = ''
  let imageSrc = ''
  let favButton= ''
  let incidenceButton=''

  if(slot.bike !== null){ //condicional biciDisponible modif. src/image
      if(slot.bike.available === true){
        imageSrc= SlotImg
        favButton=<Button variant="secondary" onClick={() => toFav({slot})}>A??adir favoritos</Button>
        incidenceButton=<Button variant="secondary" onClick={() => handleShow()}>Notificar Indicencia</Button>
        isRenting? rentButton=rentButton2 : rentButton=rentButton1

      }else{
        imageSrc= OutImg
        rentButton= <Button variant="danger" disabled > FUERA DE SERVICIO</Button>
      }
  }else{
    imageSrc = SlotImg
    favButton = slot.bike !== null
              ? <Button variant="secondary" onClick={() => toFav({slot})}>A??adir favoritos</Button>
              : '';

    incidenceButton = slot.bike !== null
              ? <Button variant="secondary" onClick={() => handleShow()}>Notificar Indicencia</Button>
              : ''    

    isRenting? rentButton=rentButton2 : rentButton=rentButton1
  }

  const handleClose = () => { setShow(false)}

  const handleShow = () => { setShow(true)}

  return (
      <>

        <div className ="card d-flex flex-column mt-2 col-3">
          <div className="img-div mt-2">
            <img src={imageSrc} className=" card-img-top " alt="Imagen Estaci??n Poliesportiu"/>
          </div>
          <div className="card-body d-flex flex-column">
            <h4 className="card-title">SLOT {index}</h4>
            <div className="card-text flex-row mb-3" >
                  <div className="datos">
                    {bikeID}
                  </div>
            </div>
            {rentButton}
            <br/>
            {favButton}
            <br/>
            {incidenceButton}
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>BiciBike | Gesti??n Incidencias Bicicletas</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            <Form onSubmit={handleSubmit(toIncidence)}>
                <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>A??ade tu Incidencia</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="Escribe aqu??..." onChange={(e) => setDescription(e.target.value)}/>
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