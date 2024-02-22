import React from 'react'
import logo1 from "../assets/saksham_white-removebg-preview (1).png"
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"
import About from '../pages/Events'
import Contact from '../pages/Contact'
import { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";




const Navbar = (props) => {
    
    const [set,setSet] = useState(true)
  
  return (
    <>
   <nav>
      <input type="checkbox" id="check"/>
      <label for="check" className="checkbtn">
         {
            set ? (<RiMenu3Fill className='icon' onClick={ () => setSet(false)} />) : (<IoClose className='icon' onClick={ () => setSet(true)} />)
         }
      </label>
      <img className='img3 w-40 h-14' src={logo1}/>
      <ul>
        <li><Link className="active hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..." to="/">Home</Link></li>
        <li><Link className ='hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...'to="/Events">Events</Link></li>
        <li><Link className='hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...' to="/Accomondation">Accomondation</Link></li>
        <li><Link className='hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...' to="/Contact">Contact</Link></li>
      </ul>
    </nav>
    <section></section>
        </>
    
  )
}

export default Navbar
