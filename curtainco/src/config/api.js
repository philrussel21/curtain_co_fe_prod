import axios from "axios"

// Create an axios instance
export default axios.create({
    baseURL: "http://localhost:5000/api", // development
    // baseURL: "https://thecurtainco.herokuapp.com/api", // production
    withCredentials: true,
    timeout: 5000,
    headers: {
        post: {
            // can be common or any other method
            header1: "value1",
        },
        "Content-Type": "application/json",
    },
})
