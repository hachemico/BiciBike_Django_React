import { ReactFragment} from "react";
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

import SlotImg from '../../assets/SLOT.png'


export default function AdminPanel(){


return(
    <>
    <div className="container">
        <div className="row">
        <CardGroup className="">  
        <Card className="">
            <Card.Img variant="top" src={SlotImg} className=" img-fluid img-thumbnail " alt="Imagen Estación Poliesportiu" />
            <Card.Body>
            <Card.Title><Link to={`/`} className='Station-link'>INCIDENCIAS</Link></Card.Title>
            </Card.Body>
        </Card>
        <Card className="">
            <Card.Img variant="top" src={SlotImg} className=" img-fluid img-thumbnail " alt="Imagen Estación Poliesportiu" />
            <Card.Body>
            <Card.Title><Link to={`/`} className='Station-link'>ALQUILERES</Link></Card.Title>
            </Card.Body>
        </Card>
        <Card className="">
            <Card.Img variant="top" src={SlotImg} className=" img-fluid img-thumbnail " alt="Imagen Estación Poliesportiu" />
            <Card.Body>
            <Card.Title><Link to={`/`} className='Station-link'>GESTIONAR BIKES</Link></Card.Title>
            </Card.Body>
        </Card>
        <Card className="">
            <Card.Img variant="top" src={SlotImg} className=" img-fluid img-thumbnail " alt="Imagen Estación Poliesportiu" />
            <Card.Body>
            <Card.Title><Link to={`/`} className='Station-link'>GESTIONAR ESTACIONES</Link></Card.Title>
            </Card.Body>
        </Card>
        </CardGroup>

        {/* <CardGroup>  
        <Card>
            <Card.Img variant="top" src={SlotImg} className=" card-img-top " alt="Imagen Estación Poliesportiu" />
            <Card.Body>
            <Card.Title><Link to={`/`} className='Station-link'>INCIDENCIAS</Link></Card.Title>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={SlotImg} className=" card-img-top " alt="Imagen Estación Poliesportiu" />
            <Card.Body>
            <Card.Title><Link to={`/`} className='Station-link'>GESTIONAR BIKE</Link></Card.Title>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={SlotImg} className=" card-img-top " alt="Imagen Estación Poliesportiu" />
            <Card.Body>
            <Card.Title><Link to={`/`} className='Station-link'>GESTIONAR BIKE</Link></Card.Title>
            </Card.Body>
        </Card>
     
        </CardGroup> */}
        </div>
    </div>
    </>
)
}