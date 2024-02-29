import axios from "axios";

axios.defaults.baseURL = "https://ci-pp5-wt-drf-api-41499a8cdeac.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = 'multipart/form-data';
axios.defaults.withCredentials = true;