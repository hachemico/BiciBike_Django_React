import React from "react";
import { useParams } from "react-router-dom";
import { useSingleStations } from "../../hooks/useDetailStations";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Slot from "../../components/Slot/slot";



export default function Station(){
    
    const params= useParams()
    console.log(params)
    // const {station} = useSingleStations();

    const {singleStation} = useSingleStations({params});

   console.log(singleStation)
//    console.log(singleStation.name)
//    console.log(singleStation.slots)

return (
 
    singleStation === undefined ? <h1>Csrgando</h1> :
    
    <div className="container">
        <div className="row">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{singleStation.name}</Card.Title>
                    <Card.Title> Slots {singleStation.slot_number}</Card.Title>
                    <div>
                        {
                            singleStation.slots.map((slot,index)=>(
                              <Slot key={index} slot={slot}/>
                            )) 
                        }
                    </div>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    </div>



    
)

}