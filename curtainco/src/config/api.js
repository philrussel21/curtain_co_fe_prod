import axios from "axios"

// Create an axios instance
export default axios.create({
    baseURL:
        process.env.NODE_ENV === "development"
            ? "http://localhost:5000/api"
            : "https://thecurtainco.herokuapp.com/api",
    // baseURL: "http://localhost:5000/api", // development
    // baseURL: "https://thecurtainco.herokuapp.com/api", // production
    withCredentials: true,
    timeout: 5000,
})
