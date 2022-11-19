import React, { Component,useContext,useEffect} from 'react';    
import { ToastContainer, toast } from 'react-toastify';    
import 'react-toastify/dist/ReactToastify.css';    
import './App.css';    
import ToastrContext from "../../context/ToastrContext";

export default function Toastr(){

  
  const {toastr,setToastr} = useContext(ToastrContext)
  
  const success = (message) => {
    toast.success(message);
  }
  const info = (message) => {
    toast.info(message)
  }
  const error = (message) => {
    toast.error(message)
  }
  const warning = (message) => {
    toast.warning(message)
  }

  useEffect(function(){ //admin list all bikes
  
   if(toastr){
   
      if(toastr.state === 'success' ){
        success(toastr.message);
        setToastr(null);

      }else if(toastr.state === 'warning'){
        warning(toastr.message);
        setToastr(null);

      }else if(toastr.state === 'error' ){
        error(toastr.message);
        setToastr(null);

      }else if(toastr.state === 'info' ){
        info(toastr.message);
        setToastr(null);
      }
   }
  },[toastr]);
 
return(
    <>
      <div>    
        <h3 className="navheader" align="center">BICIBIKE 🌍 - Tu servicio de alquiler de e-bikes respetuoso con el medio ambiente - 🌍 BICIBIKE </h3>      
        <ToastContainer />    
      </div>   
    </>
)
}