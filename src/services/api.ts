import axios from "axios";

export const api = axios.create({
    baseURL: "https://na-trave.herokuapp.com/"
})