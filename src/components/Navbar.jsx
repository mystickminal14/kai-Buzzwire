import React from 'react'
import './home.css'
import {NavLink} from 'react-router-dom'
export default function Navbar() {
  return (
   <>
   <div className="nav">
   
        <h1 className='main'>KaiBuzzWire</h1>
        <nav>
            <ul>
                <li>
                <NavLink to='/'>News</NavLink>
                    <NavLink to='/sports'>Sports</NavLink>
                    <NavLink to='/business'>Business</NavLink>
                    <NavLink to='/technology'>IT</NavLink>
                    <NavLink to='/entertainment'>Entertainment</NavLink>
                  
                </li>
            </ul>
        </nav>
        
        
    </div>
   </>
  )
}
