import React from 'react'
import iconoApp from '../../src/assets/icono-app.svg'; 
import './header.css';

const Header = () => {
  return (
    <header>
        <h1>MariApp </h1>
        <img src={iconoApp} alt="icono de la app" />
    </header>
  )
}

export default Header