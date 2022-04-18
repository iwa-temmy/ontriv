import axios from 'axios'

const BASE_URL = 'http://ontriv.herokuapp.com'
const Axios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})
const token = localStorage.getItem('ontrivUserToken')
Axios.defaults.headers.common = { Authorization: `Bearer ${token}` }
// Axios.defaults.headers.common = { Authorization: `bearer ${token}` }

export default Axios
