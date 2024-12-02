import axios from 'axios'
import {local_api,production_api,mode} from "../utils/index"
const api = axios.create({
    baseURL: `${mode === 'local'?local_api:production_api}/api`,
    withCredentials : true
})
export default api