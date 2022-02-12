import React, {useState,useEffect} from "react";
import useUser from "../../hooks/useUser";
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import LoginImg from '../../assets/LOGIN.png'
import './login.css'

export default function Login(){

    const [email,setEmail]= useState("")
    const [password, setPassword]= useState("")
    const {loginForm, isLogged}= useUser() //hay que hacer estructura de USERUSER
    const { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();

    useEffect(() => {
        console.log("valor is loggued - USEFECT login")
        console.log(isLogged);
        if (isLogged) {

            navigate('/');
        }
    }, [isLogged,navigate])


      const LoginSubmit = (e) => {
        console.log("<-- handlesumit -->")
        console.log(email)
        console.log(password)
        // e.preventDefault();
        
        loginForm({ email, password })
      };

    return (
        <>
        <div className="container ">
            <div className="loginForm d-flex justify-content-center">


                <Form onSubmit={handleSubmit(LoginSubmit)}>
                <img
                    className="d-block w-100 mt-3"
                    src={LoginImg}    //800x400img
                    alt="Imagen Login"
                    />
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label className="text-secondary">Email address</Form.Label>
                    <Form.Control   type="email"
                                    {...register("email",{ 
                                        required: true,
                                        pattern: {
                                          value:
                                            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                          message: 'Formato EMAIL inválido',
                                        },
                                      })}
                                    placeholder="Introduce Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email} />
                    <h6 className="error mt-1">
                      {errors.email?.type === 'required' && "Introduce email"}
                      {errors.email?.type === 'pattern' && errors.email.message}
                    </h6>

                    <Form.Text className="text-muted">
                    {/* We'll never share your email with anyone else. */}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="text-secondary" >Password</Form.Label>
                    <Form.Control   type="password" 
                                    {...register("password",{ 
                                        required: true,
                                        minLength: {
                                          value: 8,
                                          message: 'PASSWORD tiene que contener más de 8 caracteres',
                                        },
                                      })}
                                    placeholder="Password" 
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}/>
                    <h6 className="error mt-1">
                      {errors.password?.type === 'required' && "PASSWORD requerido"}
                      {errors.password?.type === 'minLength' && errors.password.message}
                    </h6>
                </Form.Group>

                <Button className = "mb-3" variant="success" type="submit">
                    Login
                </Button>
                </Form>
            </div>
        </div>
        </>
    )
}