import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'
import logoImg from '../../assets/logo.svg'

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the hero"></img>
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói
            <span role="img" aria-label="Female Hero">🦸‍♀️</span>
            <span role="img" aria-label="Male Hero">🦸‍♂️</span>
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size="16"  color="#E02041"/>
            Voltar para Profile
          </Link>
        </section>
        <form>
          <input placeholder="Titulo do caso"/>
          <textarea placeholder="Descrição"></textarea>
          <input placeholder="Valor em reais"/>
          <button type="submit" className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}