import React, { useState, useEffect } from "react"
// STYLES
import { Typography, Grid } from "@material-ui/core"
import useStyles from "./CollectionStyles"
// STATES
import { useCurtainContext } from "../../config/CurtainCoContext"
import { ACTIONS } from "../../config/stateReducer"
// SERVICES AND HELPERS
import { getAllCollections } from "../../services/collectionServices"
// COMPONENTS
import CollectionList from "./collection/CollectionList"
import LoadingSymbol from "../reusable/LoadingSymbol"

function Collections() {
    const classes = useStyles()
    const { state, dispatch } = useCurtainContext()
    const [isLoading, setIsLoading] = useState(true)
    const [collectionErrorMessage, setCollectionErrorMessage] = useState(null)

    useEffect(() => {
        getAllCollections()
            .then((resp) => {
                if (resp.status === 200) {
                    console.log("---COLLECTIONS---")
                    console.log(resp.data)
                    dispatch({
                        type: ACTIONS.SET_ALL_COLLECTIONS,
                        payload: resp.data,
                    })
                    setIsLoading(false)
                }
            })
            .catch((error) => {
                console.log(error)
                setIsLoading(false)
                setCollectionErrorMessage(error)
            })
    }, [dispatch])

    return (
        <>
            <Typography variant="h3">Collections Page</Typography>
            <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
                spacing={10}
            >
                {isLoading ? (
                    <LoadingSymbol />
                ) : collectionErrorMessage !== null ? (
                    collectionErrorMessage
                ) : (
                    <CollectionList collections={state.collections} />
                )}
            </Grid>
        </>
    )
}

export default Collections
