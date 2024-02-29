import axios from "axios";



export function setToken(token) {
    axios.defaults.headers.common[
        "Authorization" 
      ] = `Bearer ${token}`;
} 