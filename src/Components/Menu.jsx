import React, { useState } from 'react'
import '../Style/Menu.css'
import listen_img from '../Icons/listen_icon.png'
import reading_img from '../Icons/literature-32.ico'
import profile_img from '../Icons/user-32.ico'
import dictionary_img from '../Icons/letter-a-32.ico'
import login_img from '../Icons/login-32.ico'

function Menu() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
    <div className='menu'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/5/59/Hamburger_icon_white.svg' onClick={() => setShowMenu(!showMenu)} className='menu-burger' alt='hamburger' />
        <ul className='menu-items'>
          <li className='menu-links'><button className='listening'><img src={listen_img} alt="listen" /></button></li>          
          <li className='menu-links'><button className='listening'><img src={reading_img} alt="reading" /></button></li>
          <li className='menu-links'><button className='listening'><img src={dictionary_img} alt="dictionary" /></button></li>
          <li className='menu-links'><button className='listening'><img src={profile_img} alt="profile" /></button></li>
          <li className='menu-links'><button className='listening' onClick={() => {window.location = "/register"}}><img src={login_img} alt="login" /></button></li>
        </ul>
    </div>
    {showMenu ? (
      <div className='menu-two' id='menu-two'>
      <ul className='menu-item'>
        <li className='menu-link' ><a href='/'>Listening</a></li>
        <li className='menu-link'><a href='/'>Reading</a></li>
        <li className='menu-link'><a href='/'>Dictionary</a></li>
        <li className='menu-link'><a href='/'>Profile</a></li>
        <li className='menu-link'><a href='/login'>Login</a></li>
      </ul>
    </div>
    ) : (
      ""
    )}
    
    </>
  )
}

export default Menu