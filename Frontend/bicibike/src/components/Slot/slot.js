import React from "react";
import './slot.css'
import SlotImg from '../../assets/SLOT.png'
import Button from 'react-bootstrap/Button'
import useUser from "../../hooks/useUser";
import RentService from "../../services/RentService";


export default function Slot ({slot,index}) {

  const {check_auth,addFav,rentBike,backBike} = useUser()


  const toRent = ({slot}) => {
  
    if(check_auth() === true){ //comprovamos que hay token.

      console.log("hay token")
      console.log("valor SLOT>> "+slot.name)
      rentBike({slot})
      //IR AL HOOK --> service --> Server
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
      //IR AL HOOK --> service --> Server
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
      //IR AL HOOK --> service --> Server
    }else{
      console.log("no hay token")

      //MOSTRAR TOASTER "Para realizar un alquiler, tiene que estar registrado." 
    }

  }

  let rentButton =slot.id_bike !== null
              ? <Button variant="success" onClick={() => toRent({slot})}>Alquilar</Button>
              : <Button variant="warning" onClick={() => backRent({slot})}>SLOT VACIO</Button>;
  let bikeID = slot.id_bike !== null
                  ? <h5>Bicicleta Nº {slot.id_bike}</h5> 
                  : <h5>BiciBike</h5>;
  let favButton = slot.id_bike !== null
                  ? <Button variant="info" onClick={() => toFav({slot})}>Añadir favorito</Button>
                  : '';
  return (
      <>
     
        <div className ="card d-flex flex-column mt-2 col-3">
          <div className="img-div mt-2">
            <img src={SlotImg} className=" card-img-top " alt="Imagen Estación Poliesportiu"/>
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