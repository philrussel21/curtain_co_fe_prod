import React, { useState, useEffect } from "react"
// HELPERS AND SERVICES
import { useCurtainContext } from "../../config/CurtainCoContext"
import { ACTIONS } from "../../config/stateReducer"
import { submitConsultationRequest } from "../../services/consultationServices"
import { isEmpty } from "../../helpers/appHelpers"
// STYLES
import { CssBaseline, Box, Typography } from "@material-ui/core"
import useStyles from "./ConsultationStyles"
// COMPONENTS
import Copyright from "../authentication/Copyright"
import UserDataForm from "../reusable/UserDataForm"

export default function SignUp() {
    const classes = useStyles()

    const { state, dispatch } = useCurtainContext()
    const [message, setMessage] = useState({ message: "" })
    const [request, setRequest] = useState({})

    function getUserDetailsFromForm(userDetails) {
        delete userDetails.role
        delete userDetails.password
        delete userDetails.orders
        setRequest({ ...message, ...userDetails })
    }

    // THE WAY THIS WORKS, AS IN WHY I HAVE THE SUBMIT IN A useEffect
    // IS THAT THE REQUEST STATE REMAIN EMPTY WHEN FILLING OUT THE FORM
    // THE LOCAL STATE IN USERDATAFORM HANDLES ALL THAT INFO
    // THEN WHEN USER PRESSES SUBMIT ON USERDATAFORM, IT WILL FIRE THE getUserDetailsFromForm
    // THEN SETTING THE REQUEST OBJECT, WHICH IN TURN FIRES THE useEffect CHECKING THAT
    // THE REQUEST IS NOT EMPTY
    // THIS CODE SHOULD BE REFACTORED, IT WORKS, BUT FEELS UNSTABLE
    useEffect(() => {
        if (!isEmpty(request)) {
            console.log(request)
            console.log(message.message)
            if (message.message === "") return alert("Please fill in a message")

            // submitConsultationRequest(request)
            //     .then((resp) => {
            //         console.log("---CONSULTATION---")
            //         console.log(resp.data)
            //     if (resp.status === 201) {
            //         dispatch({
            //             type: ACTIONS.ADD_CONSULTATION,
            //             payload: request,
            //         })
            //         // CLEAR THE REQUEST STATE SO THAT IT DOESN'T LOOP INFINITELY
            //         // THE useEffect WOULD ACTUALLY FIRE AGAIN DUE TO THE CHANGE
            //         // BUT WONT SEND THE FORM (NOT IDEAL, BUT TIME CONSTRAINTS)
            //         // THIS FIRES ON EVERY PAGE REFRESH WHILST ON THIS PAGE TOO
            //         setRequest({})
            //     }
            // })
            // .catch((error) => {
            //     console.log(error)
            // })
        } else {
            console.log(
                "consultation request object is empty and submitting the request failed"
            )
        }
    }, [dispatch, request, message])

    function handleMessageChange(e) {
        setMessage({ message: e.target.value })
    }

    return (
        <>
            {/* <CssBaseline /> */}

            <div className={classes.paper}>
                <UserDataForm
                    currentUser={state.currentUser}
                    handleFunctionFromParent={getUserDetailsFromForm}
                    withAuth={{ email: true, password: false }}
                    headerInformation={{
                        icon: false,
                        title: "Request Consultation",
                    }}
                    buttonText={"Submit Request"}
                    withConsultMessage={{
                        msg: message.message,
                        handleFunction: handleMessageChange,
                    }}
                />
            </div>

            <Box mt={5}>
                <Copyright />
            </Box>
        </>
    )
}
