import axios from "axios"
import md5 from "md5";

const BASE_URL = 'https://gateway.marvel.com/v1/public'
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY
const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY

const generateAuthParam = () => {
  const timestamp = Date.now();
  const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);
  const params = {ts: timestamp, apikey: PUBLIC_KEY, hash}

  return params
}

export default axios.create({
  baseURL: BASE_URL,
  params: {...generateAuthParam()}
})