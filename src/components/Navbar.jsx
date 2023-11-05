import React from 'react'
import '../components/nav.css'
import logo from '../Images/logo_new.png'
const Navbar = () => {
  return (
    <div className='con'>
      <div className='Navbar'> 
        <div  >
            <img className='logo' src={logo} alt="logo" />
        </div>
        <div >
           <ul className='title'>
            <li>About us </li>
            <li>Calculators </li>
            <li>Press & Media </li>
            <li> Stable Expert</li>
            <li>Blogs </li>
           </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
