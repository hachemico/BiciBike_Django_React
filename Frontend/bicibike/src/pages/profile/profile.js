import React,{useContext,useState} from "react";
import { useEffect } from 'react'
import './profile.css'
import UserContext from "../../context/UserContext";
import UserService from '../../services/UserService';
import useUser from "../../hooks/useUser";
import useProfile from "../../hooks/useProfile";

import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";



export default function ProfilePage(){

    const { profileData, setProfileData, numRents,setNumRents,numIncidences,setNumIncidences, auxBio, setAuxBio} = useContext(UserContext)
    

    console.log("VALOR PROFILE_DATA>> "+profileData);
    
 
    const [username, setUsername] = useState(
        () => window.sessionStorage.getItem('username'))

    const { handleSubmit} = useForm();
    const {updateProfile} = useProfile()
    const [show, setShow] = useState(false);
    const[newUsername,setNewUsername] = useState("")
    const[bio,setBio] = useState("")

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
        

      }, [auxBio])


      const toUpdate = (value) => {
        updateProfile(value)
    }

    const handleClose = () => { console.log("HandleClose")
            setShow(false)
        }

    const updateSubmit =(event)=>{

        let params={'user':username,'bio':bio}

        updateProfile(params)
        setShow(false)

    }
    const handleShow = (profileData) => {     //guardamos el valor en el state para poder aplicarlo en el update.
        console.log("profileValue");
        console.log(profileData);
        setShow(true)
    }
    
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
                            <button type="button" className="btn btn-warning" onClick={() => handleShow(username)}>Editar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
   <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>BiciBike | Añadir Bici</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            <Form onSubmit={handleSubmit(updateSubmit)}>
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="string" placeholder={profileData.username} value={newUsername} onChange={(e) => setNewUsername(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBio">
                    <Form.Label>Bio</Form.Label>
                    <Form.Control type="string" placeholder={profileData.bio} value={bio} onChange={(e) => setBio(e.target.value)}/>
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formAvailable">
                    <label>
                    <div> Disponible:</div>
                
                    <select value={available} onChange={(e) => setAvailable(e.target.value)}>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                    </label>    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAtUse">
                    <label>
                    <div>En uso:</div>
                    <select value={atUse} onChange={(e) => setAtUse(e.target.value)}>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                    </label>   
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Actualizar
                </Button>
            </Form>
            </Modal.Body>
        </Modal>   
    </>
)
}