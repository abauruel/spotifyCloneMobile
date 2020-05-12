import { SERVER_URL } from "react-native-dotenv";
import axios from "axios";
console.log(SERVER_URL);
const api = axios.create({
  baseURL: SERVER_URL,
});

export default api;
