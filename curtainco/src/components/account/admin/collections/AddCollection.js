import React, { useState, useRef } from "react"
// COMPONENTS
import CollectionForm from "../../../reusable/CollectionForm"
// STYLES
import { Container, Paper } from "@material-ui/core"
import useStyles from "../AdminStyles"
// HELPERS AND SERVICES
import { submitCollectionToDbAndUpdateState } from "../../../../services/collectionServices"
import {
    filterProductsInCollection,
    checkIfProductsExistInCollection,
} from "../../../../helpers/collectionHelpers"
// STATE
import { useCurtainContext } from "../../../../config/CurtainCoContext"
import { ACTIONS } from "../../../../config/stateReducer"

function AddCollection() {
    const classes = useStyles()
    const { dispatch } = useCurtainContext()
    const [resetFile, setResetFile] = useState(false)
    const [photo, setPhoto] = useState({})
    const [tracksArray, setTracksArray] = useState([])
    const [fabricsArray, setFabricsArray] = useState([])
    const [accessoryArray, setAccessoryArray] = useState([])
    const emptyCollection = useRef({
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

    function handleFileChange(file) {
        console.log(file)
        setPhoto(file)
    }

    function resetCollectionForm() {
        setCollection(emptyCollection.current)
    }

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
        console.log(fabricsArray)
    }

    function handleTextChange(event) {
        setCollection({
            ...collection,
            [event.target.name]: event.target.value,
        })
    }

    async function handleSubmit() {
        // INFORM THE USER THEY ARE SUBMITTING A COLLECTION WITH NO
        // PRODUCTS IN A CATEGORY
        let emptyFabric = checkIfProductsExistInCollection(
            collection.fabric,
            "fabric"
        )
        let emptyTrack = checkIfProductsExistInCollection(
            collection.track,
            "track"
        )
        let emptyAccessories = checkIfProductsExistInCollection(
            collection.accessory,
            "accessory"
        )
        if (
            (emptyFabric && !window.confirm(emptyFabric)) ||
            (emptyTrack && !window.confirm(emptyTrack)) ||
            (emptyAccessories && !window.confirm(emptyAccessories))
        ) {
            return
        }

        let result = filterProductsInCollection(collection)
        let tempCollection = result.collection
        let error = result.error
        // WARN USER IF THERE ARE DUPLICATES AND ALLOW THEM TO PROCEED
        // IF THEY WANT TO
        if (error && !window.confirm(error)) {
            return
        }

        let respOrError = await submitCollectionToDbAndUpdateState(
            "add",
            tempCollection,
            dispatch,
            ACTIONS,
            setResetFile,
            setPhoto,
            photo,
            resetCollectionForm
        )
        console.log(respOrError)
    }

    return (
        <Paper className={classes.paper}>
            <Container>
                <CollectionForm
                    title={"Add Collection"}
                    buttonText={"Submit Collection"}
                    handleTextChange={handleTextChange}
                    handleSelectChange={handleSelectChange}
                    handleSubmit={handleSubmit}
                    handleRemove={false}
                    collection={collection}
                    handleFileChange={handleFileChange}
                    setResetFile={setResetFile}
                    resetFile={resetFile}
                />
            </Container>
        </Paper>
    )
}

export default AddCollection
