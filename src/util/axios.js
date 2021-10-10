import * as axios from 'axios';

const BASE_URL = "http://gh-trending-api.herokuapp.com";

var axiosInstance = axios.create();
axiosInstance.defaults.timeout = process.env.REACT_APP_TIMEOUT;
axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.headers.common['Content-Type'] ='application/json';
axiosInstance.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// axiosInstance.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
axiosInstance.defaults.withCredentials = false;
// delete axiosInstance.defaults.headers.common["X-Requested-With"];
// withCredentials: false,
// var config = {
//   headers: {'Access-Control-Allow-Origin': '*'}
// };
export default axiosInstance;