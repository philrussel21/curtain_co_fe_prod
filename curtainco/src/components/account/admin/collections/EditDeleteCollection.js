import React, { useState, useEffect, useRef, useCallback } from "react"
// STYLES
import { Paper } from "@material-ui/core"
import useStyles from "../AdminStyles"
// COMPONENTS
import CollectionForm from "../../../reusable/CollectionForm"
// HELPERS AND SERVICES
import {
    deleteCollection,
    submitCollectionToDbAndUpdateState,
} from "../../../../services/collectionServices"
import {
    filterProductsInCollection,
    getOneCollectionFromState,
    checkIfUserIsRemovingAProduct,
} from "../../../../helpers/collectionHelpers"
// STATE
import { useCurtainContext } from "../../../../config/CurtainCoContext"
import { ACTIONS } from "../../../../config/stateReducer"
import {
    setErrorSnackBar,
    setSuccessSnackBar,
} from "../../../../helpers/appHelpers"

function EditDeleteCollection({ editCollectionId, setEditCollectionId }) {
    const classes = useStyles()
    const { state, dispatch } = useCurtainContext()
    const [resetFile, setResetFile] = useState(false)
    const [photo, setPhoto] = useState({})
    const [tracksArray, setTracksArray] = useState(["", "", "", ""])
    const [fabricsArray, setFabricsArray] = useState(["", "", "", ""])
    const [accessoryArray, setAccessoryArray] = useState(["", "", "", ""])
    const [isLoading, setIsLoading] = useState(false)
    const [previousCollection, setPreviousCollection] = useState(
        editCollectionId
    )
    const emptyCollection = useRef({
        _id: "",
        name: "",
        description: "",
        imgUrl: "",
        price: "",
        track: [],
        fabric: [],
        accessory: [],
        trackTip: "",
        accessoryTip: "",
        fabricTip: "",
    })
    const [collection, setCollection] = useState(emptyCollection.current)

    const resetCollectionForm = useCallback(() => {
        setCollection(emptyCollection.current)
    }, [emptyCollection])

    function handleFileChange(file) {
        console.log(file)
        setPhoto(file)
    }

    useEffect(() => {
        // this resets the file in the FileInput component on
        // a product change / update to form
        if (editCollectionId !== previousCollection) {
            setPreviousCollection(editCollectionId)
            setResetFile(true)
        }
        // IF PRODUCT ID COMES THROUGH AS A PROP, SET THE FORM
        // OTHERWISE CLEAR THE FORM
        if (editCollectionId !== "") {
            const collectionBeingUpdated = getOneCollectionFromState(
                state.collections,
                editCollectionId
            )
            // BECAUSE TRACKS/FABRICS/ACCESSORIES ARE RETURNED AS AN ARRAY OF OBJECTS
            // NEED TO ITERATE OVER AND EXTRACT THE IDS FOR THE SELECT COMPONENTS AGAIN
            let tempTracks = collectionBeingUpdated.track.map((obj) => obj._id)
            let tempFabrics = collectionBeingUpdated.fabric.map(
                (obj) => obj._id
            )
            let tempAccessories = collectionBeingUpdated.accessory.map(
                (obj) => obj._id
            )
            setCollection({
                ...collectionBeingUpdated,
                track: tempTracks,
                fabric: tempFabrics,
                accessory: tempAccessories,
            })
            setTracksArray(tempTracks)
            setFabricsArray(tempFabrics)
            setAccessoryArray(tempAccessories)
        } else {
            resetCollectionForm()
        }
    }, [
        state.collections,
        editCollectionId,
        previousCollection,
        resetCollectionForm,
    ])

    function handleSelectChange(event) {
        let selectName = event.target.name.split("-")[0]
        let selectIndex = event.target.name.split("-")[1]
        switch (selectName) {
            case "track":
                let tempTracks = [...tracksArray]
                tempTracks[selectIndex] = event.target.value
                setTracksArray(tempTracks)
                setCollection({ ...collection, track: tempTracks })
                break
            case "fabric":
                let tempFabrics = [...fabricsArray]
                tempFabrics[selectIndex] = event.target.value
                setFabricsArray(tempFabrics)
                setCollection({ ...collection, fabric: tempFabrics })
                break
            case "accessory":
                let tempAccessories = [...accessoryArray]
                tempAccessories[selectIndex] = event.target.value
                setAccessoryArray(tempAccessories)
                setCollection({ ...collection, accessory: tempAccessories })
                break
            default:
                break
        }
    }

    function handleTextChange(event) {
        setCollection({
            ...collection,
            [event.target.name]: event.target.value,
        })
    }

    async function handleUpdateCollection() {
        // WARN USER THEY CANNOT REMOVE A PRODUCT FROM A COLLECTION
        // WITH THE 'No Product' MENU ITEM
        let noProductResult = checkIfUserIsRemovingAProduct(collection)

        let result = filterProductsInCollection(collection)
        let tempCollection = result.collection
        let error = result.error
        // WARN USER IF THERE ARE DUPLICATES AND ALLOW THEM TO PROCEED
        // IF THEY WANT TO
        if (error && !window.confirm(error)) {
            return
        }

        setIsLoading(true)
        let respOrError = await submitCollectionToDbAndUpdateState(
            "update",
            tempCollection,
            dispatch,
            ACTIONS,
            setResetFile,
            setPhoto,
            photo,
            resetCollectionForm
        )
        setIsLoading(false)

        console.log(respOrError)
    }

    function handleRemoveCollection() {
        // DELETE THE PRODUCT ON THE DB
        // IF SUCCESSFUL, DELETE PRODUCT IN GLOBAL STATE AND SHOW SUCCESS SNACKBAR
        // THEN SET THE EDIT PRODUCT ID THAT THIS COMPONENT TAKES AS A PROP TO = "" TO RESET THE FORM
        setIsLoading(true)
        deleteCollection(collection)
            .then((resp) => {
                console.log(resp)
                if (resp.status === 202) {
                    dispatch({
                        type: ACTIONS.DELETE_COLLECTION,
                        payload: collection._id,
                    })

                    setSuccessSnackBar(
                        dispatch,
                        "Collection successfully deleted"
                    )
                }
            })
            .catch((error) => {
                console.log(error)
                setErrorSnackBar(
                    dispatch,
                    `Error: Collection was not delete. ${error}`
                )
            })
        setIsLoading(false)
        setEditCollectionId("")
    }

    // PASS IN TITLE AND TEXT FOR THE BUTTON TO THE TRACK FORM
    // PASS IN THE HANDLERS
    // PASS IN THE CURRENT TRACK
    return (
        <Paper className={classes.paper}>
            <CollectionForm
                title={"Edit Collection"}
                buttonText={"Update Collection"}
                handleTextChange={handleTextChange}
                handleSelectChange={handleSelectChange}
                handleSubmit={handleUpdateCollection}
                handleRemove={handleRemoveCollection}
                collection={collection}
                handleFileChange={handleFileChange}
                setResetFile={setResetFile}
                resetFile={resetFile}
                isLoading={isLoading}
            />
        </Paper>
    )
}

export default EditDeleteCollection
