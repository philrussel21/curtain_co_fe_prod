import React, { useEffect } from "react"
// STYLES
import {
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    Button,
} from "@material-ui/core"
import useStyles from "../AdminStyles"
// COMPONENTS
import Title from "../../../reusable/Title"
// HELPERS AND SERVICES
import {
    getFirstNameFromFullName,
    getLastNameFromFullName,
} from "../../../../helpers/userHelpers"
import {
    displayShortDate,
    setErrorSnackBar,
    setSuccessSnackBar,
} from "../../../../helpers/appHelpers"
import { getAllOrders, updateOrder } from "../../../../services/orderServices"
// STATE
import { useCurtainContext } from "../../../../config/CurtainCoContext"
import { ACTIONS } from "../../../../config/stateReducer"

function AllOrders() {
    const classes = useStyles()
    const { state, dispatch } = useCurtainContext()
    let allOrders = state.orders

    useEffect(() => {
        getAllOrders()
            .then((resp) => {
                // console.log("---ORDERS---")
                // console.log(resp.data)
                dispatch({
                    type: ACTIONS.SET_ALL_ORDERS,
                    payload: resp.data,
                })
            })
            .catch((err) => {
                console.log(err.response)
                setErrorSnackBar(
                    dispatch,
                    "Error: Something went wrong when fetching all the orders"
                )
            })
    }, [dispatch])

    function handleOrderCheckbox(event) {
        const checked = event.target.checked
        const orderId = event.currentTarget.parentNode.parentNode.id
        updateOrder(orderId, { isProcessed: checked })
            .then((resp) => {
                // console.log("---UPDATED ORDER---")
                // console.log(resp.data)
                if (resp.status === 200) {
                    dispatch({
                        type: ACTIONS.UPDATE_ORDER,
                        payload: resp.data,
                    })
                    setSuccessSnackBar(dispatch, "Order successfully updated")
                }
            })
            .catch((error) => {
                console.log(
                    `Something went wrong when updating the order: ${error.response}`
                )
                setErrorSnackBar(
                    dispatch,
                    "Error: Something went wrong when updating the order"
                )
            })
    }

    function handleOrderSummary(event) {
        // event.currentTarget.value = "fullName,message"
        // const fullName = event.currentTarget.value.split("/")[0];
        // const message = event.currentTarget.value.split("/")[1];
        // prettier-ignore
        const orderId = event.currentTarget.parentNode.parentNode.id;
        const order = state.orders.find((ord) => ord._id === orderId)
        dispatch({
            type: ACTIONS.SET_MODAL,
            payload: {
                open: true,
                data: order,
                paymentSummary: true,
            },
        })
    }

    const orderRow = allOrders.map((ord) => (
        <TableRow key={ord._id} id={ord._id} hover>
            <TableCell>
                <Checkbox
                    color="primary"
                    checked={ord.isProcessed}
                    inputProps={{ "aria-label": "secondary checkbox" }}
                    onClick={handleOrderCheckbox}
                />
            </TableCell>
            <TableCell
                className={ord.isProcessed ? classes.checkboxSelected : ""}
            >
                {displayShortDate(ord.updatedAt)}
            </TableCell>
            <TableCell
                className={ord.isProcessed ? classes.checkboxSelected : ""}
            >
                {`${getFirstNameFromFullName(ord.customer.fullName)} 
                ${getLastNameFromFullName(ord.customer.fullName)}`}
            </TableCell>
            <TableCell
                className={ord.isProcessed ? classes.checkboxSelected : ""}
            >
                {ord.customer.email}
            </TableCell>
            <TableCell
                className={ord.isProcessed ? classes.checkboxSelected : ""}
            >
                {ord.paymentData.id}
            </TableCell>
            <TableCell>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleOrderSummary}
                    value={`${ord.customer.fullName}`}
                >
                    View
                </Button>
            </TableCell>
        </TableRow>
    ))
    return (
        <Paper className={classes.paper}>
            <Title>All Orders</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Shipped</TableCell>
                        <TableCell>Created On</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Payment ID</TableCell>
                        <TableCell>Order Summary</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>{orderRow}</TableBody>
            </Table>
        </Paper>
    )
}

export default AllOrders
