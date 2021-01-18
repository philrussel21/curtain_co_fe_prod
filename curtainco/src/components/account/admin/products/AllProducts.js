import React, { useEffect } from "react"
// STYLES
import {
    TableContainer,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
} from "@material-ui/core"
import useStyles from "../AdminStyles"
// HELPERS AND SERVICES
import { getAllProducts } from "../../../../services/productServices"
// STATE
import { useCurtainContext } from "../../../../config/CurtainCoContext"
import { ACTIONS } from "../../../../config/stateReducer"
// HELPERS AND SERVICES
import { sortACTIONS, sortProducts } from "../../../../helpers/productHelpers"
import { setErrorSnackBar } from "../../../../helpers/appHelpers"
// COMPONENTS
import Title from "../../../reusable/Title"

export default function AllProducts({ fillEditProductPage, editProductId }) {
    const classes = useStyles()
    const { state, dispatch } = useCurtainContext()

    useEffect(() => {
        getAllProducts()
            .then((resp) => {
                if (resp.status === 200) {
                    // console.log("---PRODUCTS---");
                    // console.log(resp.data);
                    let sortedProducts = sortProducts(
                        resp.data,
                        sortACTIONS.NAME_ALPHABETICAL
                    )
                    sortedProducts = sortProducts(
                        resp.data,
                        sortACTIONS.CATEGORY
                    )
                    dispatch({
                        type: ACTIONS.SET_ALL_PRODUCTS,
                        payload: sortedProducts,
                    })
                }
            })
            .catch((error) => {
                console.log(error.response)
                setErrorSnackBar(
                    dispatch,
                    "Error: Something went wrong when fetching all the products"
                )
            })
    }, [dispatch])

    let productItems = state.products.map((prod) => (
        <TableRow
            key={prod._id}
            id={`${prod.category},${prod._id}`}
            className={classes.tableRowHover}
            hover
            selected={editProductId === prod._id}
            onClick={fillEditProductPage}
        >
            <TableCell>{prod.category}</TableCell>
            <TableCell>{prod.name}</TableCell>
            <TableCell>${prod.price}</TableCell>
        </TableRow>
    ))

    return (
        <Paper className={classes.paper}>
            <Title>Products</Title>
            <TableContainer className={classes.tableContainer}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Category</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{productItems}</TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}
