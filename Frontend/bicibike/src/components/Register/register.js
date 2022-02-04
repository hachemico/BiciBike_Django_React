import React, {useState} from "react";
import useUser from "../../hooks/useUser";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import { useForm } from "react-hook-form";
import RegisterImg from '../../assets/REGISTER.png'
import './register.css';


export default function Register(){

    const {registerForm} = useUser()
    const [email,setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [username, setUsername]= useState("")

    const { register, handleSubmit, formState: { errors } } = useForm();

    const RegisterSubmit = (e) =>{

        console.log("<---- handleSubmin Register ---->");
        console.log(email);
        console.log(password);
        console.log(username);
        registerForm({username, email,password})
    };

return (
<>
<div className="container ">  {/* Se utiliza FORM bootstrap para diseño, con la validacion de react-hook-form */}
            <div className="loginForm d-flex justify-content-center">

                <Form onSubmit={handleSubmit(RegisterSubmit)}>
                <img
                    className="d-block w-100 mt-3"
                    src={RegisterImg}    //800x400img
                    alt="Imagen Register"
                    />
                <Form.Group className="mb-3 mt-3" controlId="formBasicUsername">
                    <Form.Label className="text-secondary" >Nombre Usuario</Form.Label>
                    <Form.Control  type="username" 
                            {...register("username",{ 
                                                      required: true,
                                                      minLength: {
                                                        value: 3,
                                                        message: 'El nombre tiene que contener más de 4 letras',
                                                      }
                                                    })}
                            placeholder="Nombre Usuario" 
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            />
                    <h6 className="error mt-1">
                      {errors.username?.type === 'required' && "Introduce nombre usuario"}
                      {errors.username?.type === 'minLength' && errors.username.message}
                    </h6>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label className="text-secondary">Email</Form.Label>
                    <Form.Control  type="email"
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
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="text-secondary" >Password</Form.Label>
                    
                    <Form.Control  type="password" 
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
                    Registrarse
                </Button>
                </Form>
               
            </div>
        </div>



</>
)




}