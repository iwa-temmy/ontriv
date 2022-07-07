import axios from 'axios'

const BASE_URL = 'http://ontriv.herokuapp.com'
console.log(localStorage.getItem('ontrivUserToken'))
const token = localStorage.getItem('ontrivUserToken') ? localStorage.getItem('ontrivUserToken') : "";
const Axios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}` 
  }
})

// axios.defaults.headers.common['Authorization'] = `Bearer ${token}` 
// Axios.defaults.headers.common = { Authorization: `Token ${token}` }
// Axios.defaults.headers.common = { Authorization: `bearer ${token}` }

export default Axios
