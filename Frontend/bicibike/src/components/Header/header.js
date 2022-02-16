import React , {useContext,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import useUser from '../../hooks/useUser';
import UserContext from '../../context/UserContext'
export default function Header(){

    const{isLogged, logout ,isAdmin} = useUser()
    const{admin,setAdmin,jwt} = useContext(UserContext)

    const handleClick = e => {
        e.preventDefault()
        console.log("Pulsamos LOGOUT")
        logout()
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
                    <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>
                        <Container>
                            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                            <Navbar.Collapse id='responsive-navbar-nav' />
                            <Nav>
                            <Link to ='/'>Home</Link>
                                <Link to ='/stations'>Estaciones</Link>
                                <Link to ='#' onClick={handleClick}>Logout</Link>                                
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
            )
        }else{
            return (
                <div className='row'>
                    <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>
                        <Container>
                            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                            <Navbar.Collapse id='responsive-navbar-nav' />
                            <Nav>
                                <Link to ='/'>Home</Link>
                                <Link to ='/stations'>Estaciones</Link>
                                <Link to ='/register'>Registrate</Link>
                                <Link to ='/login'>Login</Link>
                            </Nav>
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
                    <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>
                        <Container>
                            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                            <Navbar.Collapse id='responsive-navbar-nav' />
                            <Nav>
                            <Link to ='/'>Home</Link>
                                <Link to ='/stations'>Estaciones</Link>
                                <Link to ='/panelAdmin'>PanelAdmin</Link>
                                <Link to ='#' onClick={handleClick}>Logout</Link>                                
                            </Nav>
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