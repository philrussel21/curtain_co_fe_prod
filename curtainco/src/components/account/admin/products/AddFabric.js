import React, { useState, useRef } from "react"
// COMPONENTS
import FabricForm from "../../../reusable/FabricForm"
// HELPERS AND SERVICES
import { submitProductToDbAndUpdateState } from "../../../../services/productServices"
// STATE
import { useCurtainContext } from "../../../../config/CurtainCoContext"
import { ACTIONS } from "../../../../config/stateReducer"

function AddFabric() {
    const { dispatch } = useCurtainContext()
    const [resetFile, setResetFile] = useState(false)
    const [photo, setPhoto] = useState({})
    const emptyFabric = useRef({
        category: "Fabric",
        name: "",
        colour: "",
        imgUrl: "",
        price: "",
        density: "",
        style: "",
        size: "",
        length: "",
        description: "",
    })
    const [fabric, setFabric] = useState(emptyFabric.current)

    function resetProductForm() {
        setFabric(emptyFabric.current)
    }

    function handleFileChange(file) {
        console.log(file)
        setPhoto(file)
    }

    const handleTextChange = (event) => {
        setFabric({ ...fabric, [event.target.name]: event.target.value })
    }

    async function handleSubmit() {
        let respOrError = await submitProductToDbAndUpdateState(
            "add",
            fabric,
            dispatch,
            ACTIONS,
            setResetFile,
            setPhoto,
            photo,
            resetProductForm
        )
        console.log(respOrError)
    }

    return (
        <FabricForm
            title={"Add Fabric"}
            buttonText={"Submit Fabric"}
            handleTextChange={handleTextChange}
            handleSubmit={handleSubmit}
            handleRemove={false}
            product={fabric}
            handleFileChange={handleFileChange}
            setResetFile={setResetFile}
            resetFile={resetFile}
        />
    )
}

export default AddFabric
