import { ReactFragment} from "react";
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

import SlotImg from '../../assets/SLOT.png'


export default function AdminPanel(){


return(
    <>
    <div className="title bg-success mt-1"><h2>PANEL ADMIN</h2></div>
    <div className="panel mt-5 mb-5">
    
    <div className="container">
        <div className="row">
        <CardGroup>  
        <Card className="">
            <Link to={`/adminPanel/incidences`} className='Station-link text-dark text-decoration-none'>
                <Card.Img variant="top" src={SlotImg} className=" img-fluid img-thumbnail " alt="Imagen Estación Poliesportiu" />
                <Card.Body>
                <Card.Title>INCIDENCIAS</Card.Title>
                </Card.Body>
            </Link>
        </Card>
        <Card className="">
            <Link to={`/`} className='Station-link text-dark text-decoration-none' >
                <Card.Img variant="top" src={SlotImg} className=" img-fluid img-thumbnail " alt="Imagen Estación Poliesportiu" />
                <Card.Body>
                <Card.Title>ALQUILERES</Card.Title>
                </Card.Body>
            </Link>
        </Card>
        <Card className="">
            <Link to={`/adminPanel/bikes`} className='Station-link text-dark text-decoration-none'>
                <Card.Img variant="top" src={SlotImg} className=" img-fluid img-thumbnail " alt="Imagen Estación Poliesportiu" />
                <Card.Body>
                <Card.Title>GESTIONAR BIKES</Card.Title>
                </Card.Body>
            </Link>
        </Card>
        <Card className="">
            <Link to={`/`} className='Station-link text-dark text-decoration-none'>
                <Card.Img variant="top" src={SlotImg} className=" img-fluid img-thumbnail " alt="Imagen Estación Poliesportiu" />
                <Card.Body>
                <Card.Title>GESTIONAR ESTACIONES</Card.Title>
                </Card.Body>
            </Link>
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
    </div>
    </>
)
}