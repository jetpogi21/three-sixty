import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8004/api",
});

export default axiosClient;
