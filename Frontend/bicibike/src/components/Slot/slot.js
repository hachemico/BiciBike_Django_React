import React from "react";
import './slot.css'

export default function Slot ({slot}) {
    
  console.log(slot)
  return (
      <>
      {/* <div className="container "> */}
        <div className ="card flex-row mt-2">
          <div className="img-div">
            <img src="https://www.ocu.org/-/media/ocu/images/home/coches/bicicletas/sistemas-publicos-alquiler/bicis_alquiler_800x450.jpg?rev=7a12a0f6-75a0-48fa-9971-f663c807d67c&mw=660&hash=4BCC5494D578413402832A56CA390ADE" className=" card-img-top" alt="Imagen Estación Poliesportiu"/>
          </div>
          <div className="card-body">
            <h4 className="card-title">Estación: {slot.station}</h4>
            <div className="card-text flex-row" >
                  <div className="datos">
                    <h5>Id Bike</h5>
                    <small>{slot.id_bike}</small>
                  </div>
                  <div className="status">
                    <p>Estado: {slot.status}</p>
                  </div>
            </div>
          </div>
        </div>
      </>
    )
  }