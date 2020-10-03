import axios from "axios";
const nasaEndpoint = process.env.REACT_APP_NASA_ENDPOINT
const nasaApiKey = process.env.REACT_APP_NASA_API_KEY

//axios interceptors are rules that can be applied to any http request
//I am going to apply one rule to all requests
axios.interceptors.request.use(
//interceptor callback has a config object for the request
    config => {
      //If there is a params object use it, otherwise make a new object
      config.params = config.params ? config.params : {}
      //this is  url of request(anytime I use axios.get the use() will be called
      const configUrl = config.url
      /*if url of the request includes the nasaEndpoint(which is the url for  the imagesAPI)
      then I add a url param of the api key*/
      if (configUrl.includes(nasaEndpoint)) {
         config.params["api_key"] = nasaApiKey
      }
      //return config object for the request (so axios can make request to Nasa)
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )

  export default {
    getNasaImage(image_id) {
        /*this get needs to change to whatever my API is not the APOD API
          - This API will return an object which is the response body
          - The Object has a 'collection' property which has an 'href' property
          - When I get the response body from the call, I need to dig into the response body and return href
        */
      return axios.get(`${nasaEndpoint}/asset/${image_id}`).then(response => {
        return response.data.collection.items[0].href;
      })
    },
  }
