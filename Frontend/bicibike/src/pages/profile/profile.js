import React,{useContext,useState} from "react";
import { useEffect } from 'react'
import './profile.css'
import UserContext from "../../context/UserContext";
import UserService from '../../services/UserService';



export default function ProfilePage(){

    const { profileData, setProfileData, numRents,setNumRents,numIncidences,setNumIncidences} = useContext(UserContext)
    

    console.log("VALOR PROFILE_DATA>> "+profileData);
    
 
    const [username, setUsername] = useState(
        () => window.sessionStorage.getItem('username')
        )
    
    console.log("VALOR username>> "+username)
    
    useEffect(() => {
      
        UserService.getUserProfile(username)
          .then(data=>{
            console.log("VALOR USEEFFECT Page-Profile-profile"+data);
            console.log(data.data.profile);
            setProfileData(data.data.profile);
        })
        UserService.getUserRents(username)
        .then(data=>{
            console.log("VALOR USEEFFECT Page-Profile-rents"+data);
            console.log(data.data);
            setNumRents(data.data.data_rents);
            setNumIncidences(data.data.data_incidences);
        })
        

      }, [])
    
    
return(
    <>
    <div className="container mt-4">
        <div className="d-flex justify-content-center row">
            <div className="col-md-4">
                <div className="card user-card">
                    <div className="card-header">
                        <h5> Perfil </h5>
                    </div>
                    <div className="card-block">
                        <div className="user-image">
                            <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="img-radius" alt=" User-Profile "/>
                        </div>
                        <h6 className="f-w-600 m-t-25 m-b-10"> {profileData.username} </h6>
                       
                        <hr></hr>
                        <p className="text-muted m-t-15">La <b>reduccion de Co2</b> repecto a un vehiculo</p>
                        <p className="text-muted m-t-15">a motor es aproximadamente de <b>180g/km</b></p>
                        <ul className="list-unstyled activity-leval">
                            <li className="active"></li>
                            <li className="active"></li>
                            <li className="active"></li>
                            <li className="active"></li>
                            <li className="active"></li>
                        </ul>
                        <p className="text-muted m-t-15">Le has ahorrado <b>6480g-Co2 </b> al planeta 🌎</p>
                        <ul className="list-unstyled activity-leval">
                            <li className="active"></li>
                            <li className="active"></li>
                            <li className="active"></li>
                            <li className="active"></li>
                            <li className="active"></li>
                        </ul>
                        <p className="text-muted">Trayecto 📍 | Kilometros 📏 | Incidencias 🩹</p>
                        <div className="bg-c-green counter-block m-t-10 p-20">
                            <div className="row">
                                <div className="col-4">
                                    <i className="fa fa-comment"></i>
                                    <p>{numRents}</p>
                                </div>
                                <div className="col-4">
                                    <i className="fa fa-comment"></i>
                                    <p>36</p>
                                </div>
                                <div className="col-4">
                                    <i className="fa fa-suitcase"></i>
                                    <p>{numIncidences}</p>
                                </div>
                            </div>
                        </div>
                        <p className="m-t-15 text-muted">{profileData.bio}</p>
                        <hr></hr>
                        <div className="row justify-content-center user-social-link">
                            <div className="col-auto"><a href="#!"><i className="fa fa-facebook text-facebook"></i></a></div>
                            <div className="col-auto"><a href="#!"><i className="fa fa-twitter text-twitter"></i></a></div>
                            <div className="col-auto"><a href="#!"><i className="fa fa-dribbble text-dribbble"></i></a></div>
                        </div>
                        <div>
                            <Button variant="secondary" onClick={() => toUpdate(profileData.username)}>Editar</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    </>
)
}