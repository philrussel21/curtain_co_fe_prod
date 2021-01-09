import React, { useState, useEffect } from "react"
// COMPONENTS
import PurchaseOrder from "./PurchaseOrder"
import LoadingSymbol from "../../reusable/LoadingSymbol"
// STYLES
import { Container, Typography, Grid, Divider } from "@material-ui/core"
import useStyles from "./UserDashboardStyles"
// HELPERS AND SERVICES
import { getUpdatedUserWithOrderObjects } from "../../../services/userServices"
import { useCurtainContext } from "../../../config/CurtainCoContext"

function PurchaseHistory({ isLoading }) {
    const classes = useStyles()
    const { state } = useCurtainContext()
    const [purchaseHistory, setPurchaseHistory] = useState([])
    const [purchaseHistoryError, setPurchaseHistoryError] = useState(
        "No purchases have been made"
    )

    useEffect(() => {
        if (!state.currentUser.orders) {
            setPurchaseHistoryError(
                "There was an error fetching your purchase history"
            )
        }
        setPurchaseHistory(state.currentUser.orders)
    }, [state.currentUser])

    const allPurchasedItems = purchaseHistory.map((order) => (
        <Grid item xs key={order._id}>
            <PurchaseOrder order={order} />
            <Divider />
        </Grid>
    ))

    return (
        <Container>
            <Typography variant="h5" className={classes.heading}>
                Purchase History
            </Typography>

            <Grid
                container
                direction="column"
                className={classes.purchaseHistoryRoot}
            >
                {isLoading ? (
                    <LoadingSymbol />
                ) : allPurchasedItems.length === 0 ? (
                    purchaseHistoryError
                ) : (
                    allPurchasedItems
                )}
            </Grid>
        </Container>
    )
}

export default PurchaseHistory
