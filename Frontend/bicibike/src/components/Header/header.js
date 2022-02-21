import React , {useContext,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { Navbar, Nav, Container , NavLink} from 'react-bootstrap';
import useUser from '../../hooks/useUser';
import UserContext from '../../context/UserContext'
import SlotImg from '../../assets/LOGO.png'
import { useNavigate } from 'react-router-dom';

export default function Header(){

    const{isLogged, logout ,isAdmin} = useUser()
    const{admin,setAdmin,jwt} = useContext(UserContext)
    let navigate = useNavigate();
    
    const handleClick = e => {
        e.preventDefault()
        console.log("Pulsamos LOGOUT")
        logout()
        navigate('/'); // enviamos el usuario a home.
      }

    useEffect(function(){
        console.log("USE-EFECT")
        if(isLogged) isAdmin()

    },[jwt]); //end_useEffect

    console.log("ISADMIN "+admin)
    console.log("ISLOGGED "+ isLogged)
    
    console.log("HEADER RENDERIZA!!")

    const renderLoginLogOut= (isLogged) => {
        if(isLogged === true){ //depende de si esta logueado muestra una menu u otro.
            return ( 
                <div className='row'>
                    <Navbar expand='sm' bg='success'>
                        <Container>
                            <Link to ='/'>
                                <Navbar.Brand>
                                    <img
                                    alt=""
                                    src={SlotImg}
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                    />{' '}
                                </Navbar.Brand>
                            BICIBIKE</Link>
                            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                            <Navbar.Collapse id='basic-navbar-nav' >
                            <Nav className="mr-auto">
                                <Link to ='/'>Home</Link>
                                <Link to ='/stations'>Estaciones</Link>
                                <Link to ='#' onClick={handleClick}>Logout</Link>                                
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            )
        }else{
            return (
                <div className='row'>
                    <Navbar expand='sm' bg='success' >
                        <Container>
                            <Link to ='/'>
                                    <Navbar.Brand>
                                        <img
                                        alt=""
                                        src={SlotImg}
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"
                                        />{' '}
                                
                                    </Navbar.Brand>
                                BICIBIKE</Link>
                                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                                <Navbar.Collapse id='basic-navbar-nav' >
                                <Nav className="mr-auto">
                                <Link to ='/'>Home</Link>
                                <Link to ='/stations'>Estaciones</Link>
                                <Link to ='/register'>Registrate</Link>
                                <Link to ='/login'>Login</Link>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            )
        }

    }

    const renderAdminLogged= ()=>{
        console.log("RenderAdminLogged")
        return ( 
                <div className='row'>
                    <Navbar expand='sm' bg='success'>
                        <Container>
                            <Link to ='/'>
                                <Navbar.Brand>
                                    <img
                                    alt=""
                                    src={SlotImg}
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                    />{' '}
                            
                                </Navbar.Brand>
                            BICIBIKE</Link>
                            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                            <Navbar.Collapse id='basic-navbar-nav' >
                            <Nav className="mr-auto">
                                <Link to ='/'>Home</Link>
                                <Link to ='/stations'>Estaciones</Link>
                                <Link to ='/adminPanel'>PanelAdmin</Link>
                                <Link to ='#' onClick={handleClick}>Logout</Link>                              
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
        )
    }

    let toRender=''

    admin===true
    ?toRender= renderAdminLogged() 
    :toRender= renderLoginLogOut(isLogged) 
    // let toRender=renderLoginLogOut(isLogged) 
    return (
      <>
        {toRender}
      </>

      );


}