import React from "react";
import { useParams } from "react-router-dom";
import { useSingleStations } from "../../hooks/useDetailStations";
// import Card from 'react-bootstrap/Card'

import Slot from "../../components/Slot/slot";
import Spinner from "../../components/Spinner/spinner";


export default function Station(){
    
    const params= useParams()
    const {singleStation} = useSingleStations({params});

const divStyle ={
    color:'black'
}

return (
 
    singleStation === undefined 
        ? <Spinner/> 
        : <div className="container">
            <div className="row">
                <div className="StationSingle">

                
                        <h1 style={divStyle}>{singleStation.name}</h1>
                        <h3 style={divStyle}> Slots {singleStation.slot_number}</h3>
                        <div className="row">
                            {
                                singleStation.slots.map((slot,index)=>(
                                <Slot key={index} slot={slot} index={index}/>
                                )) 
                            }
                        </div>
                            
                </div>    
            </div>
         </div>



    
)

}