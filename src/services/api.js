import axios from "axios"

export default axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
  params: {
    apikey: 'd9ca4d32a3973498dfaf3a5e7c1581cd',
    hash: '5b7ebc5e6b5b1f2450dc6f17cdb9bc4c',
    ts: '1'
  }
})