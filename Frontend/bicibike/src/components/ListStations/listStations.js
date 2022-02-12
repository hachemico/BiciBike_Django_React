import React from "react";
import Station from "../Station/station";

export default function StationsList({stations}){
    console.log("StationsLIST Component")
    console.log(stations)

    return <div className='ListStations'>
                <div className="container">
                {
                    stations.map(({name,latitude,longitude,slot_number})=>
                        <Station
                        key = {name}
                        name = {name}
                        latitude = {latitude}
                        longitude = {longitude}
                        slot_number={slot_number}
                        />
                    )
                }
                </div>
            </div>
}