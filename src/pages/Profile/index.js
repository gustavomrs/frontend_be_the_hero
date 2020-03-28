import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import './styles.css'
import api from '../../services/api'

export default function Profile(){
  const [incidents, setIncidents] = useState([])
  const ongId = localStorage.getItem('ongId')
  const ongName = localStorage.getItem('ongName')

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId
      }
    }).then(response => {
      console.log(response.data)
      setIncidents(response.data['incidents'])
    })
  }, [ongId])

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the hero"/>
        <span>Bem vinda, {ongName}</span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button type="button">
          <FiPower size="18" color="#E02041" ></FiPower>
        </button>
      </header>

      <h1>Cados cadastrados</h1>
      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO</strong>
            <p>{incident.description}</p>

            <strong>VALOR</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

            <button type="button">
              <FiTrash2></FiTrash2>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}