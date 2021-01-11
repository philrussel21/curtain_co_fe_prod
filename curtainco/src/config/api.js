import axios from "axios"

const baseURL =
    process.env.NODE_ENV === "development"
        ? "http://localhost:5000/api"
        : "https://thecurtainco.herokuapp.com/api"

// Create an axios instance
export default axios.create({
    baseURL: baseURL,
    withCredentials: true,
    timeout: 5000,
})
