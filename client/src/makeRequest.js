import axios from "axios";
import { dot } from './dotenv/index';


export const makeRequest = axios.create({
    baseURL: dot.REACT_API_URL,
    headers: {
        Authorization: "bearer " + dot.REACT_API_TOKEN,
    },
})

