import axios from 'axios'

const api = axios.create({
  baseURL: 'https://nodejs-backend-be-the-hero.herokuapp.com/'
})

export default api
