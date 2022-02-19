import React,{useContext} from "react";
import './slot.css'
import SlotImg from '../../assets/SLOT.png'
import OutImg from '../../assets/OUTSERVICE.png'
import Button from 'react-bootstrap/Button'
import useUser from "../../hooks/useUser";
import UserContext from "../../context/UserContext"


export default function Slot ({slot,index}) {

  const {check_auth,addFav,rentBike,backBike} = useUser()
  const {isRenting,setIsRenting} = useContext(UserContext)



  const toRent = ({slot}) => {
  
    if(check_auth() === true){ //comprovamos que hay token.

      console.log("hay token")
      console.log("valor SLOT>> "+slot.name)
      rentBike({slot})
    }else{
      console.log("no hay token")
      //MOSTRAR TOASTER "Para realizar un alquiler, tiene que estar registrado." 
    }
  }
  const backRent = ({slot}) => {
  
    if(check_auth() === true){ //comprovamos que hay token.

      console.log("hay token")
      console.log("valor SLOT>> "+slot.name)
      backBike({slot})

    }else{
      console.log("no hay token")
      //MOSTRAR TOASTER "Para realizar un alquiler, tiene que estar registrado." 
    }
  }


  const toFav = ({slot}) => {
    console.log("click fav!!");
    console.log(slot)
    if(check_auth()=== true){ //comprovamos que hay token.

      console.log("hay token")

      addFav({slot})

    }else{
      console.log("no hay token")

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
            ? <h5>Bicicleta Nº {slot.bike.serialNumber}</h5> 
            : <h5>BiciBike</h5>;
  
  let rentButton = ''
  let imageSrc = ''
  let favButton= ''
  
  if(slot.bike !== null){ //condicional biciDisponible modif. src/image
      if(slot.bike.available === true){
        imageSrc= SlotImg
        favButton=<Button variant="info" onClick={() => toFav({slot})}>Añadir favoritos</Button>
        isRenting? rentButton=rentButton2 : rentButton=rentButton1

      }else{
        imageSrc= OutImg
        rentButton= <Button variant="danger" disabled > FUERA DE SERVICIO</Button>
      }
  }else{
    imageSrc = SlotImg
    favButton = slot.bike !== null
              ? <Button variant="info" onClick={() => toFav({slot})}>Añadir favoritos</Button>
              : '';
              
    isRenting? rentButton=rentButton2 : rentButton=rentButton1
  }
  console.log("COMPONENT-SLOT -> Valor SLOT")
  console.log(slot)

  return (
      <>

        <div className ="card d-flex flex-column mt-2 col-3">
          <div className="img-div mt-2">
            <img src={imageSrc} className=" card-img-top " alt="Imagen Estación Poliesportiu"/>
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
          </div>
        </div>
      </>
    )
  }