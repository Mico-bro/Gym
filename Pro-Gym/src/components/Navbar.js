import React, { useState}from 'react';
import Logo from '../assets/logos/logog.png';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import './Navbar.css';

function Navbar() {
  let [openLinks, setOpenLinks] = useState(false);
  let toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };


  return (
   
   <div className='navbar' >
   <div className='leftSide' id={openLinks ? "open" : "close"}>
  
   <p>  <img src ={ Logo } alt= "stoper"  /> </p>
   <div className="hiddenLinks">
   <Link to='/'>Home</Link>
   <Link to='/menu'>Menu</Link>
   <Link to='/bmi'>BMI</Link> 
   <Link to='/contact'>Contact</Link>
   <Link to='/about'>About</Link>
   </div>

 
   </div>
   <div className='rightSide'>
   <Link to='/'>Home</Link>
   <Link to='/menu'>Menu</Link>
   <Link to='/bmi'>BMI</Link> 
   <Link to='/contact'>Contact</Link>
   <Link to='/about'>About</Link>
   <button onClick={toggleNavbar}  >
   <ReorderIcon />
   </button>
   </div>
   </div>

   
  )
}

export default Navbar;