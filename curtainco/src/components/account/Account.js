import React, { useState, useEffect } from "react"
// STATE
import { useCurtainContext } from "../../config/CurtainCoContext"
import { ACTIONS } from "../../config/stateReducer"
// PACKAGES
import { Redirect } from "react-router-dom"
// STYLES
import { Typography } from "@material-ui/core"
// COMPONENTS
import AdminDashboard from "./admin/AdminDashboard"
import UserDashboard from "./user/UserDashboard"
// HELPERS AND SERVICES
import { getUpdatedUserWithOrderObjects } from "../../services/userServices"
import { setErrorSnackBar } from "../../helpers/appHelpers"

function Account() {
    const { state, dispatch } = useCurtainContext()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getUpdatedUserFromDb() {
            if (state.currentUser !== null) {
                try {
                    const resp = await getUpdatedUserWithOrderObjects(
                        state.currentUser._id
                    )
                    let currentUser = resp.data
                    if (resp.status === 200 && currentUser) {
                        dispatch({
                            type: ACTIONS.SET_CURRENT_USER,
                            payload: currentUser,
                        })
                    }
                } catch (error) {
                    console.log(
                        `An error ocurred on getUpdatedUserWithOrderObjects at Account: ${error}. ${error.response.data.message}`
                    )
                    setErrorSnackBar(
                        dispatch,
                        "Something went wrong when fetching your purchase history"
                    )
                }
                setIsLoading(false)
            }
        }
        // THIS STOPS THE INFINITE LOOP
        if (isLoading) {
            getUpdatedUserFromDb()
        }
    }, [state.currentUser, dispatch, isLoading])

    return (
        <>
            <Typography variant="h3">Account Page</Typography>

            {state.currentUser === null || state.currentUser === undefined ? (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: {
                            prevUrl: "3000/account",
                        },
                    }}
                />
            ) : state.currentUser.role === "admin" ? (
                <AdminDashboard />
            ) : (
                <UserDashboard isLoading={isLoading} />
            )}
        </>
    )
}

export default Account
