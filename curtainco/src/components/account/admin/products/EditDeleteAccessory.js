import React, { useState, useEffect, useRef, useCallback } from "react"
// COMPONENTS
import AccessoryForm from "../../../reusable/AccessoryForm"
// HELPERS AND SERVICES
import {
    updateProduct,
    deleteProduct,
    submitProductToDbAndUpdateState,
} from "../../../../services/productServices"
import { getOneProductFromState } from "../../../../helpers/productHelpers"
// STATE
import { useCurtainContext } from "../../../../config/CurtainCoContext"
import { ACTIONS } from "../../../../config/stateReducer"
import {
    setErrorSnackBar,
    setSuccessSnackBar,
} from "../../../../helpers/appHelpers"

function EditDeleteAccessory({ editProductId, setEditProductId }) {
    const { state, dispatch } = useCurtainContext()
    const [resetFile, setResetFile] = useState(false)
    const [previousProduct, setPreviousProduct] = useState(editProductId)
    const [photo, setPhoto] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const emptyAccessory = useRef({
        category: "Accessory",
        _id: "",
        name: "",
        colour: "",
        imgUrl: "",
        price: "",
        description: "",
        type: "",
    })

    const [accessory, setAccessory] = useState(emptyAccessory.current)

    const resetProductForm = useCallback(() => {
        setAccessory(emptyAccessory.current)
    }, [emptyAccessory])

    function handleFileChange(file) {
        console.log(file)
        setPhoto(file)
    }

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
            const accessoryBeingUpdated = getOneProductFromState(
                state.products,
                editProductId
            )
            setAccessory({ ...accessoryBeingUpdated })
        } else {
            resetProductForm()
        }
    }, [state.products, editProductId, previousProduct, resetProductForm])

    const handleTextChange = (event) => {
        setAccessory({ ...accessory, [event.target.name]: event.target.value })
    }

    async function handleUpdateProduct() {
        // UPDATE DB AND STATE
        setIsLoading(true)

        let respOrError = await submitProductToDbAndUpdateState(
            "update",
            accessory,
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
        deleteProduct(accessory)
            .then((resp) => {
                console.log(resp)
                if (resp.status === 202) {
                    dispatch({
                        type: ACTIONS.DELETE_PRODUCT,
                        payload: accessory._id,
                    })
                    setSuccessSnackBar(
                        dispatch,
                        "Accessory successfully deleted"
                    )
                }
            })
            .catch((error) => {
                console.log(error)
                setErrorSnackBar(
                    dispatch,
                    `Error: Accessory was not deleted. ${error}`
                )
            })
        setIsLoading(false)

        setEditProductId("")
        setPreviousProduct("")
        setResetFile(true)
        setPhoto({})
        resetProductForm()
    }

    // PASS IN TITLE AND TEXT FOR THE BUTTON TO THE Accessory FORM
    // PASS IN THE HANDLERS
    // PASS IN THE CURRENT Accessory
    return (
        <AccessoryForm
            title={"Edit Accessory"}
            handleTextChange={handleTextChange}
            handleSubmit={handleUpdateProduct}
            handleRemove={handleRemoveProduct}
            product={accessory}
            handleFileChange={handleFileChange}
            setResetFile={setResetFile}
            resetFile={resetFile}
            isLoading={isLoading}
        />
    )
}

export default EditDeleteAccessory
