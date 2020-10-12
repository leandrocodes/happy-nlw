import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

import '../styles/pages/landing.css'

import logoImg from '../images/logo.svg'

function Landing() {
  return (
    <div id='page-landing'>
      <div className='content-wrapper'>
        <img src={logoImg} alt='Happy' />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className='location'>
          <strong>Ponta Porã</strong>
          <span>Mato Grosso do Sul</span>
        </div>

        <a href='/app' className='enter-app'>
          <FiArrowRight size={26} color='rgba(0, 0, 0, 0.5)' />
        </a>
      </div>
    </div>
  )
}

export default Landing
