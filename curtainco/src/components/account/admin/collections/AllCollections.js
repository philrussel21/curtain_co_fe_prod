import React, { useEffect } from "react"
// STYLES
import {
    Table,
    TableContainer,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
} from "@material-ui/core"
// HELPERS AND SERVICES
import { getAllCollections } from "../../../../services/collectionServices"
import { sortACTIONS, sortProducts } from "../../../../helpers/productHelpers"
// COMPONENTS
import Title from "../../../reusable/Title"
// STATE
import { ACTIONS } from "../../../../config/stateReducer"
import { useCurtainContext } from "../../../../config/CurtainCoContext"

import useStyles from "../AdminStyles"
import { setErrorSnackBar } from "../../../../helpers/appHelpers"

export default function AllCollections({
    fillEditCollectionPage,
    editCollectionId,
}) {
    const classes = useStyles()
    const { state, dispatch } = useCurtainContext()

    useEffect(() => {
        getAllCollections()
            .then((resp) => {
                if (resp.status === 200) {
                    // console.log("---COLLECTIONS---")
                    // console.log(resp.data)
                    // sortProducts can be used here as it is just looking
                    // at the object.name attribute
                    let sortedCollections = sortProducts(
                        resp.data,
                        sortACTIONS.NAME_ALPHABETICAL
                    )
                    dispatch({
                        type: ACTIONS.SET_ALL_COLLECTIONS,
                        payload: sortedCollections,
                    })
                }
            })
            .catch((error) => {
                console.log(error.response)
                setErrorSnackBar(
                    dispatch,
                    "Error: Something went wrong when fetching all collections"
                )
            })
    }, [dispatch])

    let collectionItems = state.collections.map((coll) => (
        <TableRow
            key={coll._id}
            id={coll._id}
            className={classes.tableRowHover}
            hover
            selected={editCollectionId === coll._id}
            onClick={fillEditCollectionPage}
        >
            <TableCell>{coll.name}</TableCell>
            <TableCell>${coll.price}</TableCell>
        </TableRow>
    ))

    return (
        <Paper className={classes.paper}>
            <Title>Collections</Title>
            <TableContainer className={classes.tableContainer}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{collectionItems}</TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}
