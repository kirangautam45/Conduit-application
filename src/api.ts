import axios from "axios";
const BASEURL = "https://conduit.productionready.io/api";

const apiCaller = axios.create({
  headers: { "Content-Type": "application/json" },
  baseURL: BASEURL,
});

apiCaller.interceptors.request.use(
  (config) => {return config},
  () => {}
);
export default apiCaller;
