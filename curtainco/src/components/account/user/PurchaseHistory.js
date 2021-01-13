import React, { useState, useEffect } from "react"
// COMPONENTS
import PurchaseOrder from "./PurchaseOrder"
import LoadingSymbol from "../../reusable/LoadingSymbol"
// STYLES
import { Container, Typography, Grid, Divider } from "@material-ui/core"
import useStyles from "./UserDashboardStyles"
// HELPERS AND SERVICES
import { useCurtainContext } from "../../../config/CurtainCoContext"

function PurchaseHistory({ isLoading }) {
    const classes = useStyles()
    const { state } = useCurtainContext()
    const [purchaseHistory, setPurchaseHistory] = useState([])
    const [purchaseHistoryError, setPurchaseHistoryError] = useState(
        "No purchases have been made"
    )

    useEffect(() => {
        // IF THE USER WASN'T FETCHED CORRECTLY IN ACCOUNT.JS AND ERROR OCCURRED
        // THEN ORDERS WILL BE AN ARRAY OF STRINGS OR EMPTY
        if (
            state.currentUser.orders.length === 0 ||
            typeof state.currentUser.orders[0] === "string"
        ) {
            setPurchaseHistoryError(
                "There was an error fetching your purchase history"
            )
        } else {
            setPurchaseHistory(state.currentUser.orders)
        }
    }, [state.currentUser])

    const allPurchasedItems = purchaseHistory.map((order) => (
        <Grid item xs key={order._id}>
            <PurchaseOrder order={order} />
            <Divider />
        </Grid>
    ))

    return (
        <Container style={{ height: "100%" }}>
            <Grid container spacing={2}>
                <Grid item container justify="center">
                    <Typography
                        variant="h4"
                        className={classes.userDashboardSubheading}
                    >
                        Purchase History
                    </Typography>
                </Grid>
                <Grid
                    item
                    container
                    direction="column"
                    className={classes.purchaseHistoryRoot}
                >
                    {isLoading ? (
                        <LoadingSymbol />
                    ) : allPurchasedItems.length === 0 ? (
                        <Grid item container justify="center">
                            <Typography>{purchaseHistoryError}</Typography>
                        </Grid>
                    ) : (
                        allPurchasedItems
                    )}
                </Grid>
            </Grid>
        </Container>
    )
}

export default PurchaseHistory
