import axios from "axios";

function ApiClient() {
  return axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
      key: "264143820da046f38842c88f7a11807f",
    },
  });
}
export default ApiClient;
