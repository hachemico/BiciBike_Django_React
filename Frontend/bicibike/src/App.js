import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Footer from "./components/Footer/footer"
import Header from "./components/Header/header"
import Home  from './pages/home/home'
import Login from "./pages/login/login";
import Register  from './pages/register/register'
import Station  from './pages/station/station'
import Stations  from './pages/stations/stations'

import './App.css'
import { StationsContextProvider } from "./context/StationsContext";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
      <Router>
        <UserContextProvider>
        <div className="App">
          <section className="App-content">
          <Header/>
            <main>
              <StationsContextProvider>
                <Routes>
                <Route path="/"               element={ <Home/> }     />
                <Route path="/login"          element={ <Login/> }    />
                <Route path="/register"       element={ <Register/> }    />
                <Route path="/station/:name"  element={ <Station/> } />
                <Route path="/stations"       element={ <Stations/> } />
               
                </Routes>
              </StationsContextProvider>
            </main>
            <Footer/>
          </section>
        </div>
        </UserContextProvider>
      </Router>
  );
}

export default App;
