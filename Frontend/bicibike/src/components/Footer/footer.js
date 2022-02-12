import React from 'react'
import './footer.css'


export default function Footer(){



    return (
      <>

    <footer className="page-footer bg-dark font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Alquiler bicis ELECTICAS BICIBIKE</h5>
                <p>Here you can use rows and columns to organize your footer content.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Conocenos</a></li>
                    <li><a href="#!">Contacta</a></li>
                    <li><a href="#!">MisAlquileres</a></li>
                    <li><a href="#!">Planes Contratación</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3 ">
                <h5 className="text-uppercase">Redes Sociales</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Facebook</a></li>
                    <li><a href="#!">Instagram</a></li>
                    <li><a href="#!">Twitter</a></li>
                    <li><a href="#!">Whatsapp</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">©Copyright - 
        <a href="/stations"> BiciBike2022</a>
    </div>

</footer>
      </>
      );


}