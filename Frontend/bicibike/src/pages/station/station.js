import React from "react";
import { useParams } from "react-router-dom";
import { useSingleStations } from "../../hooks/useDetailStations";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'




export default function Station(){
    
    const params= useParams()
    console.log(params)
    // const {station} = useSingleStations();

    const {singleStation} = useSingleStations({params});

   console.log(singleStation)
   console.log(singleStation.name)

return (
    <>
    <div className="container">
        <div className="row">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{singleStation.name}</Card.Title>
                    <Card.Title>Slots {singleStation.slot_number}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    </div>



    </>
)

}