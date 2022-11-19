import React, {Suspense} from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';  
import { StationsContextProvider } from "./context/StationsContext";
import { UserContextProvider } from "./context/UserContext";
import { RentsContextProvider } from "./context/RentContext";
import { BikeContextProvider} from "./context/BikeContext"
import { IncidencesContextProvider } from './context/IncidencesContext';
import { ToastrContextProvider } from './context/ToastrContext';
import Spinner from './components/Spinner/spinner'

const AdminPanel = React.lazy(() => import("./pages/adminPanel/adminPanel"))
const Bikes = React.lazy(() => import("./pages/adminPanel/bikes"))
const Incidences = React.lazy(() => import("./pages/adminPanel/incidences"))
const Footer = React.lazy(() => import("./components/Footer/footer"))
const Header= React.lazy(() => import("./components/Header/header"))
const Home = React.lazy(() => import("./pages/home/home"))
const Login = React.lazy(() => import("./pages/login/login"))
const Profile = React.lazy(() => import("./pages/profile/profile"))
const Register  = React.lazy(() => import("./pages/register/register"))
const Station = React.lazy(() => import("./pages/station/station"))
const Stations  = React.lazy(() => import("./pages/stations/stations"))
const Toastr  = React.lazy(() => import("./components/Toastr/toastr"))

function App() {
  return (
      <Router>
        <Suspense fallback={<Spinner />}>
        <UserContextProvider>
        <ToastrContextProvider>  
        <div className="App">
          <section className="App-content">
          <Header/>
          <Toastr/> 
            <main>
              <StationsContextProvider>
              <RentsContextProvider>
              <BikeContextProvider>
              <IncidencesContextProvider>
                <Routes>
                  <Route path="/adminPanel"             element={ <AdminPanel/> }/>
                  <Route path="/adminPanel/bikes"       element={ <Bikes/> }/>
                  <Route path="/adminPanel/incidences"  element={ <Incidences/> }/>
                  <Route path="/"                       element={ <Home/> } />
                  <Route path="/login"                  element={ <Login/> } />
                  <Route path="/profile"                element={ <Profile/> } />
                  <Route path="/register"               element={ <Register/> } />
                  <Route path="/station/:name"          element={ <Station/> } />
                  <Route path="/stations"               element={ <Stations/> } />
                
                </Routes>
                
                </IncidencesContextProvider>
                </BikeContextProvider>
              </RentsContextProvider>
              </StationsContextProvider>
            </main>
            <Footer/>
          </section>
        </div>
        </ToastrContextProvider>
        </UserContextProvider>
        </Suspense>
      </Router>
  );
}

export default App;
