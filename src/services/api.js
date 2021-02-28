import axios from "axios"

console.log(process.env)

export default axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
  params: {
    apikey: process.env.REACT_APP_API_KEY,
    hash: process.env.REACT_APP_HASH,
    ts: process.env.REACT_APP_TS
  }
})