import axios from "axios";
const nasaEndpoint = process.env.REACT_APP_NASA_ENDPOINT
const nasaApiKey = process.env.REACT_APP_NASA_API_KEY

//placeholder code until I can figure out how to use MY API
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

  export default {
    getNasaImage(image_id) {
        //this get needs to change to whatever my API is not the APOD API
        //This API will return an object which is the response body
        //The Object has a 'collection' property which has an 'href' property
        //When I get the response body from the call, I need to dig into the response body and return href
      return axios.get(`${nasaEndpoint}/asset/${image_id}`).then(response => {
        return response.data.collection.items[0].href;
      })
    },
  }
