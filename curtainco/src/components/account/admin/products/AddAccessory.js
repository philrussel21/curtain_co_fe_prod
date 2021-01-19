import React, { useState, useRef } from "react"
// STYLES
import {
    FormControl,
    FormLabel,
    FormControlLabel,
    RadioGroup,
    Radio,
    Divider,
} from "@material-ui/core"
// HELPERS AND SERVICES
import { submitProductToDbAndUpdateState } from "../../../../services/productServices"
// STATE
import { useCurtainContext } from "../../../../config/CurtainCoContext"
import { ACTIONS } from "../../../../config/stateReducer"
// COMPONENTS
import AccessoryForm from "../../../reusable/AccessoryForm"
// import { setErrorSnackBar } from "../../../../helpers/appHelpers"

function AddAccessory() {
    const { dispatch } = useCurtainContext()
    const [checkedValue, setCheckedValue] = useState("Flick Stick")
    const [resetFile, setResetFile] = useState(false)
    const [photo, setPhoto] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    // WE PASS IN FLICK STICK AS THE TYPE SO THAT IT DEFAULTS TO THAT FORM ON FIRST RENDER
    const emptyAccessory = useRef({
        category: "Accessory",
        name: "",
        colour: "",
        imgUrl: "",
        price: "",
        description: "",
        type: "Flick Stick",
    })
    const [accessory, setAccessory] = useState(emptyAccessory.current)

    function resetProductForm() {
        setAccessory(emptyAccessory.current)
    }

    function handleFileChange(file) {
        // console.log(file)
        setPhoto(file)
    }

    function handleTypeChange(event) {
        event.preventDefault()
        setCheckedValue(event.target.value)
        setAccessory({ ...accessory, type: event.target.value })
    }

    function handleTextChange(event) {
        setAccessory({ ...accessory, [event.target.name]: event.target.value })
    }

    async function handleSubmit() {
        setIsLoading(true)
        let respOrError = await submitProductToDbAndUpdateState(
            "add",
            accessory,
            dispatch,
            ACTIONS,
            setResetFile,
            setPhoto,
            photo,
            resetProductForm
        )
        setIsLoading(false)
        // console.log(respOrError)
    }

    return (
        <>
            <FormControl component="fieldset" style={{ marginTop: "4%" }}>
                <FormLabel component="legend">Which Accessory?</FormLabel>
                <RadioGroup
                    aria-label="add-accessory"
                    name="add-accessory"
                    value={checkedValue}
                    onChange={handleTypeChange}
                    row
                >
                    <FormControlLabel
                        value="Flick Stick"
                        control={<Radio />}
                        label="Flick Stick"
                    />
                    <FormControlLabel
                        value="Automated"
                        control={<Radio />}
                        label="Automated"
                    />
                    <FormControlLabel
                        value="Tie Back"
                        control={<Radio />}
                        label="Tie Back"
                    />
                    <FormControlLabel
                        value="Other"
                        control={<Radio />}
                        label="Other"
                    />
                </RadioGroup>
            </FormControl>

            <Divider />

            <AccessoryForm
                title={"Add Accessory"}
                handleTextChange={handleTextChange}
                handleSubmit={handleSubmit}
                handleRemove={false}
                product={accessory}
                handleFileChange={handleFileChange}
                setResetFile={setResetFile}
                resetFile={resetFile}
                isLoading={isLoading}
            />
        </>
    )
}

export default AddAccessory
