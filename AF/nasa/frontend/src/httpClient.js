import axios from "axios"

const nasaEndpoint = "https://api.nasa.gov/";
const nasaApiKey = "SyrPWWRnegnQ8mEkrpF79r2BWAhqn7ecDBilJR96"

axios.interceptors.request.use(
  config => {
    config.params = config.params ? config.params : {}
    const configUrl = config.url
    if (configUrl.includes(nasaEndpoint)) {
      config.params["api_key"] = nasaApiKey
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

const api = {
  getApod() {
    return axios.get(`${nasaEndpoint}planetary/apod`)
  },
}

export default api