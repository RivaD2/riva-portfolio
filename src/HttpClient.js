import axios from "axios";
const nasaEndpoint = process.env.REACT_APP_NASA_ENDPOINT
const nasaApiKey = process.env.REACT_APP_NASA_API_KEY

axios.interceptors.request.use(
  // Interceptor callback has a config object for the request
  config => {
    //If there is a params object use it, otherwise make a new object
    config.params = config.params ? config.params : {}
    // This is the url of request(anytime I use axios.get the use() will be called
    const configUrl = config.url
    /*if url of the request includes the nasaEndpoint(which is the url for  the imagesAPI)
    then I add a url param of the api key*/
    if (configUrl.includes(nasaEndpoint)) {
      config.params["api_key"] = nasaApiKey
    }
    return config;
  },
  error => {
    return Promise.reject(error)
  }
)


export default {
  getNasaImage: async (image_id) => {
    const response = await axios.get(`${nasaEndpoint}/asset/${image_id}`)
    return response.data.collection.items[2].href;
  },
  getProjectListData:  async () => {
    const response = await axios.get('/projectList.json');
    return response.data;
  }
}
