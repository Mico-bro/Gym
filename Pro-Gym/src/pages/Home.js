import React from 'react';
import { Link } from 'react-router-dom';
import  backs from '../assets/homes/home.jpg';
import './Home.css';

function Home() {
  return (
    <div className='home' style = {{ backgroundImage:`url(${backs})`}}>
    <div className='headerContainer'  > 
    <h1> Tomorow <br/> starts <br/> <span>Today.</span>🎃️ </h1><br/>
    <br/><br/> <br/><br/><br/><br/>
     <p>  <br/> <br/> <br/><br/> <br/><br/> </p>
     <Link to='/menu'>
     <button>start now</button>
     </Link>
     </div>
    
    </div>
  )
}

export default Home;