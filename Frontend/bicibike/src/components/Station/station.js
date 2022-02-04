import React from "react";
import './station.css'
import {Link} from 'react-router-dom'
export default function Station ({ name, latitude, longitude,slot_number }) {
    
  
  return (
      <>
      {/* <div className="container "> */}
        <div className ="card flex-row mt-2">
          <div className="img-div">
            <img src="https://www.ocu.org/-/media/ocu/images/home/coches/bicicletas/sistemas-publicos-alquiler/bicis_alquiler_800x450.jpg?rev=7a12a0f6-75a0-48fa-9971-f663c807d67c&mw=660&hash=4BCC5494D578413402832A56CA390ADE" className=" card-img-top" alt="Imagen Estación Poliesportiu"/>
          </div>
          <div className="card-body">
            <h4 className="card-title">Estación: {name}</h4>
            <div className="card-text flex-row" >
                  <div className="ubicacion">
                    <h5>Ubicación</h5>
                    <small>Lat. {latitude} Lon. {longitude}</small>
                  </div>
                  <div className="slots_num">
                    <p>Numero Plazas: {slot_number}</p>
                    <p>Bicis Disponibles: {} </p>
                  </div>
            </div>
            <Link to={`/station/${name}`} className='Station-link'>VerDetalle</Link>
          </div>
        </div>
      </>
    )
  }