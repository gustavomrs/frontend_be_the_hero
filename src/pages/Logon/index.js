import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import './styles.css'
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

export default function Logon(){
  const [id, setId] = useState('')

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault()

    try {
      const response = await api.post('login', { id })

      localStorage.setItem('ongId', id)
      localStorage.setItem('ongName', response.data.name)
      history.push('/profile')
    } catch (error) {
      console.log(error)
      alert ('Algo deu errado.')
    }
  }

  return(
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero"></img>

        <form onSubmit={handleLogin}>
          <h1>Login</h1>

          <input
            placeholder="Your ID"
            value={id}
            onChange={e => setId(e.target.value)}/>
          <button className="button" type="submit">Go!</button>
          <Link className="back-link" to="/register">
            <FiLogIn size="16"  color="#E02041"/>
            I don't have an ID
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes"/>
    </div>
  )
}