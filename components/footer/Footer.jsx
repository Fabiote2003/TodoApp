import React from 'react'
import corazon from '../../src/assets/corazon.svg';
import './footer.css'
const Footer = () => {
  return (
    <footer className='footer-container'>
      <h4>Hecho con amor.. Fabio <img src={corazon} alt="Foto de corazón" /></h4>
    </footer>
  )
}

export default Footer