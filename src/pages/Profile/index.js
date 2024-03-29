import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import './styles.css'
import api from '../../services/api'

export default function Profile(){
  const [incidents, setIncidents] = useState([])
  const ongId = localStorage.getItem('ongId')
  const ongName = localStorage.getItem('ongName')

  const history = useHistory()

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

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      })

      setIncidents(incidents.filter(incident => incident.id !== id))
    } catch (error) {
      alert('OPS! Something went wrong')
    }
  }

  function handleLogout(params) {
    localStorage.clear();
    history.push('/')
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the hero"/>
        <span>Welcome, {ongName}</span>

        <Link className="button" to="/incidents/new">New Incident</Link>
        <button type="button">
          <FiPower size="18" color="#E02041" onClick={handleLogout}></FiPower>
        </button>
      </header>

      <h1>Incidents registered</h1>
      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>TITLE</strong>
            <p>{incident.title}</p>

            <strong>DESCRIPTION</strong>
            <p>{incident.description}</p>

            <strong>VALUE</strong>
            <p>{Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(incident.value)}</p>

            <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
              <FiTrash2></FiTrash2>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}