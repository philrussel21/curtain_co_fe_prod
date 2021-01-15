import React, { useState, useEffect, useRef } from "react"
// STYLES
import { Typography, Grid, Button } from "@material-ui/core"
import useStyles from "./UserDashboardStyles"
// HELPERS AND SERVICES
import { displayShortDate } from "../../../helpers/appHelpers"
import { useCurtainContext } from "../../../config/CurtainCoContext"
import { buildContentString } from "../../../helpers/collectionHelpers"
// STATE
import { ACTIONS } from "../../../config/stateReducer"

function PurchaseOrder({ order }) {
    const classes = useStyles()
    const { dispatch } = useCurtainContext()
    // USING THIS FOR THE IMAGE IN THE ORDER LIST
    const firstItemInOrder = useRef({ current: { imgUrl: "", name: "" } })
    // const [contentStrings, setContentStrings] = useState({
    //     collection: "",
    //     fabric: "",
    //     track: "",
    //     accessory: "",
    // })

    function handleItemClick(event) {
        event.preventDefault()
        dispatch({
            type: ACTIONS.SET_MODAL,
            payload: {
                open: true,
                data: order,
                orderSummary: true,
            },
        })
    }

    useEffect(() => {
        // let collectionsArray = []
        // let fabricsArray = []
        // let tracksArray = []
        // let accessoriesArray = []

        // if (order.items !== undefined) {
        firstItemInOrder.current = order.items[0].item
        //     for (let i = 0; i < order.items.length; i++) {
        //         const element = order.items[i]
        //         switch (element.item.category) {
        //             case "Fabric":
        //                 fabricsArray.push(element)
        //                 break
        //             case "Tracks":
        //                 tracksArray.push(element)
        //                 break
        //             case "Accessory":
        //                 accessoriesArray.push(element)
        //                 break
        //             default:
        //                 collectionsArray.push(element)
        //                 break
        //         }
        //     }
        // }

        // let collectionStr = buildContentString(collectionsArray, "Collection")
        // let fabricStr = buildContentString(fabricsArray, "Fabric")
        // let trackStr = buildContentString(tracksArray, "Track")
        // let accessoryStr = buildContentString(accessoriesArray, "Accessory")

        // let obj = {
        //     collection: collectionStr,
        //     fabric: fabricStr,
        //     track: trackStr,
        //     accessory: accessoryStr,
        // }
        // setContentStrings(obj)
    }, [order])

    //  THIS IS THE CONTAINER FOR EACH INDIVIDUAL ORDER MADE BY A USER
    return (
        <Grid container direction="column">
            <Grid item className={classes.userAccountPurchaseOrderNumberCont}>
                <Typography className={classes.userAccountPurchaseOrderNumber}>
                    Order #: {order.paymentData.id}
                </Typography>
            </Grid>
            <Grid item container justify="center">
                <Grid
                    item
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    xs={4}
                >
                    <img
                        src={
                            firstItemInOrder.current.imgUrl === undefined
                                ? "/no-image.png"
                                : firstItemInOrder.current.imgUrl
                        }
                        alt={
                            firstItemInOrder.current.name === undefined
                                ? "product has no image"
                                : firstItemInOrder.current.name
                        }
                        className={classes.orderImg}
                    />
                </Grid>
                <Grid
                    item
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="center"
                    xs={4}
                >
                    <Grid item container justify="flex-start">
                        <Typography
                            variant="h6"
                            component="h6"
                            className={
                                classes.userAccountPurchaseOrderDetailsHeader
                            }
                        >
                            Details
                        </Typography>
                    </Grid>
                    <Grid item container>
                        <Grid item container direction="column" xs={6}>
                            <Typography
                                className={
                                    classes.purchaseOrderDetailsListHeading
                                }
                            >
                                Date:
                            </Typography>
                            <Typography
                                className={
                                    classes.purchaseOrderDetailsListHeading
                                }
                            >
                                Cost:
                            </Typography>
                            <Typography
                                className={
                                    classes.purchaseOrderDetailsListHeading
                                }
                            >
                                Status?
                            </Typography>
                        </Grid>
                        <Grid item container direction="column" xs={6}>
                            <Typography
                                className={classes.purchaseOrderDetailsData}
                            >
                                {displayShortDate(order.createdAt)}
                            </Typography>
                            <Typography
                                className={classes.purchaseOrderDetailsData}
                            >
                                ${order.totalPrice}
                            </Typography>
                            <Typography
                                className={classes.purchaseOrderDetailsData}
                            >
                                {order.isProcessed ? "Sent" : "Not yet sent"}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    xs={2}
                    justify="flex-end"
                    alignItems="center"
                >
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={handleItemClick}
                    >
                        See More
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default PurchaseOrder
