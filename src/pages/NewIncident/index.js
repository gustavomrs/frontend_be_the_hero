import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'
import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

export default function NewIncident() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  const ongId = localStorage.getItem('ongId')

  const history = useHistory()

  async function handleNewIncident(e) {
    e.preventDefault()

    const data = {
      title,
      description,
      value,
    }

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      })
      history.push('/profile')
    } catch (error) {
      alert('OPS! Erro ao cadastrar')
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the hero"></img>
          <h1>Register new incident</h1>
          <p>
            Describe the incident with details to find a hero
            <span role="img" aria-label="Female Hero">🦸‍♀️</span>
            <span role="img" aria-label="Male Hero">🦸‍♂️</span>
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size="16"  color="#E02041"/>
            Back to Profile
          </Link>
        </section>
        <form onSubmit={handleNewIncident }>
          <input
            placeholder="Incident title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Incident description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder="Budget"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button type="submit" className="button">Register</button>
        </form>
      </div>
    </div>
  )
}