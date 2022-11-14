
import { ReactFragment} from "react";
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

import SlotImg from '../../assets/SLOT.png'
import { useIncidences } from "../../hooks/useIncidences";

import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';


export default function AdminPanel(){
    
    const {newIncidences} = useIncidences()
    console.log("ADMIN PANEL NEWINCIDENCES>> "+ newIncidences);

    // https://mui.com/material-ui/react-badge/

return(
    <>
    <div className="title bg-dark mt-1"><h2>PANEL ADMIN</h2></div>
    <div className="panel mt-5 mb-5">
    
    <div className="container">
        <div className="row">
        <CardGroup>  
        <Card className="">
            <Link to={`/adminPanel/incidences`} className='Station-link text-dark text-decoration-none'>
                <Card.Img variant="top" src={SlotImg} className=" img-fluid img-thumbnail " alt="Imagen Panel Admin Incidencias" />
                <Card.Body>
                <Card.Title>INCIDENCIAS</Card.Title>
                <Badge badgeContent={newIncidences} color="primary">
                    <MailIcon color="action" />
                </Badge>
    
                </Card.Body>
            </Link>
        </Card>
        <Card className="">
            <Link to={`/`} className='Station-link text-dark text-decoration-none' >
                <Card.Img variant="top" src={SlotImg} className=" img-fluid img-thumbnail " alt="Imagen Panel Admin Alquileres" />
                <Card.Body>
                <Card.Title>ALQUILERES</Card.Title>
                </Card.Body>
            </Link>
        </Card>
        <Card className="">
            <Link to={`/adminPanel/bikes`} className='Station-link text-dark text-decoration-none'>
                <Card.Img variant="top" src={SlotImg} className=" img-fluid img-thumbnail " alt="Imagen Panel Admin Gestionar Bikes" />
                <Card.Body>
                <Card.Title>GESTIONAR BIKES</Card.Title>
                </Card.Body>
            </Link>
        </Card>
        <Card className="">
            <Link to={`/`} className='Station-link text-dark text-decoration-none'>
                <Card.Img variant="top" src={SlotImg} className=" img-fluid img-thumbnail " alt="Imagen Panel Admin Gestionar Estaciones" />
                <Card.Body>
                <Card.Title>GESTIONAR ESTACIONES</Card.Title>
                </Card.Body>
            </Link>
        </Card>
        </CardGroup>
        </div>
    </div>
    </div>
    </>
)
}