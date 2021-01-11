import React, { useState, useEffect, useRef, useCallback } from "react"
// COMPONENTS
import TrackForm from "../../../reusable/TrackForm"
// HELPERS AND SERVICES
import {
    submitProductToDbAndUpdateState,
    deleteProduct,
} from "../../../../services/productServices"
import { getOneProductFromState } from "../../../../helpers/productHelpers"
// STATE
import { useCurtainContext } from "../../../../config/CurtainCoContext"
import { ACTIONS } from "../../../../config/stateReducer"
import {
    setErrorSnackBar,
    setSuccessSnackBar,
} from "../../../../helpers/appHelpers"

function EditDeleteTrack({ editProductId, setEditProductId }) {
    const { state, dispatch } = useCurtainContext()
    const [resetFile, setResetFile] = useState(false)
    const [previousProduct, setPreviousProduct] = useState(editProductId)
    const [photo, setPhoto] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const emptyTrack = useRef({
        category: "Track",
        _id: "",
        name: "",
        colour: "",
        imgUrl: "",
        price: "",
        type: "",
        single: "",
        finialStyle: "",
        finialColour: "",
        location: "",
        description: "",
    })

    const [track, setTrack] = useState(emptyTrack.current)

    function handleFileChange(file) {
        console.log(file)
        setPhoto(file)
    }

    const resetProductForm = useCallback(() => {
        setTrack(emptyTrack.current)
    }, [emptyTrack])

    useEffect(() => {
        // this resets the file in the FileInput component on
        // a product change / update to form
        if (editProductId !== previousProduct) {
            setPreviousProduct(editProductId)
            setResetFile(true)
        }
        // IF PRODUCT ID COMES THROUGH AS A PROP, SET THE FORM
        // OTHERWISE CLEAR THE FORM
        if (editProductId !== "") {
            const trackBeingUpdated = getOneProductFromState(
                state.products,
                editProductId
            )
            setTrack({ ...trackBeingUpdated })
        } else {
            resetProductForm()
        }
    }, [state.products, editProductId, previousProduct, resetProductForm])

    const handleRadioChange = (event) => {
        const singleTrack = event.target.value === "single" ? true : false
        setTrack({
            ...track,
            [event.target.name]: singleTrack,
        })
    }

    const handleTextChange = (event) => {
        setTrack({ ...track, [event.target.name]: event.target.value })
    }

    async function handleUpdateProduct() {
        // UPDATE DB AND STATE
        setIsLoading(true)
        let respOrError = await submitProductToDbAndUpdateState(
            "update",
            track,
            dispatch,
            ACTIONS,
            setResetFile,
            setPhoto,
            photo,
            false
        )
        setIsLoading(false)
        console.log(respOrError)
    }

    function handleRemoveProduct() {
        // DELETE THE PRODUCT ON THE DB
        // IF SUCCESSFUL, DELETE PRODUCT IN GLOBAL STATE AND SHOW SUCCESS SNACKBAR
        // THEN SET THE EDIT PRODUCT ID THAT THIS COMPONENT TAKES AS A PROP TO = "" TO RESET THE FORM
        setIsLoading(true)

        deleteProduct(track)
            .then((resp) => {
                console.log(resp)
                if (resp.status === 202) {
                    dispatch({
                        type: ACTIONS.DELETE_PRODUCT,
                        payload: track._id,
                    })

                    setSuccessSnackBar(dispatch, "Track successfully deleted")
                }
            })
            .catch((error) => {
                console.log(error)
                setErrorSnackBar(
                    dispatch,
                    `Error: track was not deleted. ${error}`
                )
            })
        setIsLoading(false)
        setEditProductId("")
        setPreviousProduct("")
        setResetFile(true)
        setPhoto({})
        resetProductForm()
    }

    // PASS IN TITLE AND TEXT FOR THE BUTTON TO THE TRACK FORM
    // PASS IN THE HANDLERS
    // PASS IN THE CURRENT TRACK
    return (
        <TrackForm
            title={"Edit Track"}
            buttonText={"Update Track"}
            handleTextChange={handleTextChange}
            handleRadioChange={handleRadioChange}
            handleSubmit={handleUpdateProduct}
            handleRemove={handleRemoveProduct}
            product={track}
            handleFileChange={handleFileChange}
            setResetFile={setResetFile}
            resetFile={resetFile}
            isLoading={isLoading}
        />
    )
}

export default EditDeleteTrack
