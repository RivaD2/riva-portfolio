import axios from "axios";
const nasaEndpoint = process.env.REACT_APP_NASA_ENDPOINT
const nasaApiKey = process.env.REACT_APP_NASA_API_KEY

/**
 * Intercepts every request before it hits error handling
 * If there is a params object then interceptor will just use it, or just create a new obj
 *@param {object} config the callback for the request
 *@returns {object} config object that holds the url param of api key
 */
axios.interceptors.request.use(config => {
    config.params = config.params ? config.params : {}
    // This is the url of request(anytime I use axios.get the use() will be called
    const configUrl = config.url;
    /* If url of the request includes the nasaEndpoint(which is the url for the imagesAPI)
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
  /**
   *Gets Nasa image from endpoint
   * @param  {string} image_id id of Nasa image
   * @returns {string} string for one small nasa img
   */
  getNasaImage: async (image_id) => {
    try {
      const response = await axios.get(`${nasaEndpoint}/asset/${image_id}`)
      // Inspect items array, when I target items at index 3, 5th image in parallax breaks
      // Inspect ProjectsPage data and state for this as well
      return response.data.collection.items[2].href;
    } catch (err) {
      console.error(err);
    }
  },
  /**
   * gets project list data from json file and returns res
   * @returns {object} all data objects from json
   */
  getProjectListData:  async () => {
    try {
      const response = await axios.get('/projectList.json');
      return response.data;
    } catch (err) {
      console.err(err);
    }
  }
}
