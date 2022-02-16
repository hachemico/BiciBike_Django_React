import React from 'react'
import './spinner.css'

export default function Spinner () {
  return (
    <>  
        <div className='container'>
            <div className='d-flex flex-column justify-content-center'>
                <div className='d-flex align-self-center'>
                    <div className="spinner"></div>
                </div>
                <h4>CARGANDO...</h4>
            </div>
        </div>
    </>
  )
}