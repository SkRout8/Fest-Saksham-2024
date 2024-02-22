import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/Events";
import Contact from "./pages/Contact";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { useEffect, useState } from 'react'
import PrivateRoute from "./components/PrivateRoute";
import Accomondation from "./pages/Accomondation";
import Events from "./pages/Events";
import Team from './pages/Team'


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  return (
    <div className="screen-bar">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>

        <Route path="/" element= {<Home isLoggedIn={isLoggedIn}/>} />
        <Route path="/Events" element= {<Events isLoggedIn={isLoggedIn}/>} />
        <Route path="/Contact" element= {<Contact isLoggedIn={isLoggedIn}/>} />
        <Route path="/Team" element= {<Team isLoggedIn={isLoggedIn}/>} />
        <Route path="/Accomondation" element= {<Accomondation isLoggedIn={isLoggedIn}/>} />
        <Route path="/login" element = {<Login  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element = {
          <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard/>
          </PrivateRoute>
       
        } />

      </Routes>

    
    </div>
    )
}

export default App;
