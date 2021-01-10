import React, { useState, useRef } from "react"
// HELPERS AND SERVICES
import { submitProductToDbAndUpdateState } from "../../../../services/productServices"
// STATE
import { useCurtainContext } from "../../../../config/CurtainCoContext"
import { ACTIONS } from "../../../../config/stateReducer"
// COMPONENTS
import TrackForm from "../../../reusable/TrackForm"
import { setErrorSnackBar } from "../../../../helpers/appHelpers"

function AddTrack() {
    const { dispatch } = useCurtainContext()
    const [resetFile, setResetFile] = useState(false)
    const [photo, setPhoto] = useState({})
    const emptyTrack = useRef({
        category: "Track",
        name: "",
        colour: "",
        imgUrl: "",
        price: "",
        type: "",
        single: false,
        finialStyle: "",
        finialColour: "",
        location: "",
        description: "",
    })
    const [track, setTrack] = useState(emptyTrack.current)

    function resetProductForm() {
        setTrack(emptyTrack.current)
    }

    function handleFileChange(file) {
        console.log(file)
        setPhoto(file)
    }

    function handleRadioChange(event) {
        const singleTrack = event.target.value === "single" ? true : false
        setTrack({
            ...track,
            [event.target.name]: singleTrack,
        })
    }

    function handleTextChange(event) {
        setTrack({ ...track, [event.target.name]: event.target.value })
    }

    async function handleSubmit() {
        let respOrError = await submitProductToDbAndUpdateState(
            "add",
            track,
            dispatch,
            ACTIONS,
            setResetFile,
            setPhoto,
            photo,
            resetProductForm
        )
        if (typeof respOrError === "string") {
            setErrorSnackBar(dispatch, respOrError)
            return
        }
    }

    // PASS IN TITLE AND TEXT FOR THE BUTTON TO THE TRACK FORM
    // PASS IN THE HANDLERS, HANDLE REMOVE IS FALSE DUE TO NOT WANTING TO DISPLAY BUTTON ON THE ADD FORM
    // PASS IN THE CURRENT TRACK WHICH WILL BE EMPTY
    return (
        <TrackForm
            title={"Add Track"}
            buttonText={"Submit Track"}
            handleTextChange={handleTextChange}
            handleRadioChange={handleRadioChange}
            handleSubmit={handleSubmit}
            handleRemove={false}
            product={track}
            handleFileChange={handleFileChange}
            setResetFile={setResetFile}
            resetFile={resetFile}
        />
    )
}

export default AddTrack
