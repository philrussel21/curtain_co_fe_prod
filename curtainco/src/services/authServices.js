import api from "../config/api"

async function registerUser(userInfo) {
    // call to server to login user
    // return user info if successful and error if not
    const response = await api.post("/account/register", userInfo)
    console.log(response)

    console.log("user created")
    return response
}

async function loginUser(userInfo) {
    // call to server to login user
    // return user info if successful and error if not
    const response = await api.post("/account", userInfo)
    console.log("got user back from server")
    return response
}

async function logoutUser() {
    // call to server to logout user
    // return api.get("/account/logout")
    const response = await api.get("/account/logout")
    console.log("logging out")
    return response
}

async function getLoggedInUserFromHomeRoute() {
    // call to server to logout user
    const response = await api.get("/")
    return response
}

export { registerUser, loginUser, logoutUser, getLoggedInUserFromHomeRoute }
