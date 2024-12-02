import axios from 'axios'
import {api_url} from "../utils/index"
const api = axios.create({
    baseURL: `${api_url}/api`,
    withCredentials : true
})
export default api