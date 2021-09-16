import axios from "axios";

axios.defaults.headers = {
    'Content-Type': 'application/json'
};

const httpService = {
    get: axios.get,
    put: axios.put,
    post: axios.post,
    patch: axios.patch,
    delete: axios.delete,
    request: axios.request
};

export default httpService;