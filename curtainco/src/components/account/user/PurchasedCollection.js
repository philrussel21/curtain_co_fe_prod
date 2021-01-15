import React from "react"
// STYLES
import { Typography, Grid, Divider, Box } from "@material-ui/core"
import useStyles from "../../reusable/ModalStyles"
// HELPERS AND SERVICES
import { capitalize } from "../../../helpers/appHelpers"
// import { buildContentString } from "../../../helpers/collectionHelpers"

function PurchasedCollection({ qty, collection }) {
    const classes = useStyles()
    return (
        <Box m={1}>
            <Grid
                item
                container
                justify="center"
                alignItems="center"
                spacing={2}
            >
                <Grid item container justify="center" xs={2}>
                    <Grid item>
                        <img
                            src={
                                collection.imgUrl !== undefined
                                    ? collection.imgUrl
                                    : "/no-image.png"
                            }
                            alt={collection.name}
                            className={classes.orderSummaryModalImage}
                        />
                    </Grid>
                </Grid>
                <Grid item container direction="column" xs={6}>
                    <Grid item>
                        <Typography
                            variant="h6"
                            className={classes.orderSummaryModalPurchaseName}
                        >
                            {capitalize(collection.name)}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography>QTY: x {qty}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>
                            ${qty * collection.price.toFixed(2)}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item container direction="column" xs={4}>
                    <Grid item>
                        <Typography
                            className={classes.orderSummaryModalContentTitle}
                        >
                            Contents
                        </Typography>
                    </Grid>
                    <Grid item container>
                        <Grid item container direction="column" xs={6}>
                            <Typography
                                className={
                                    classes.orderSummaryModalContentHeadings
                                }
                            >
                                Tracks:
                            </Typography>
                            <Typography
                                className={
                                    classes.orderSummaryModalContentHeadings
                                }
                            >
                                Fabrics:
                            </Typography>
                            <Typography
                                className={
                                    classes.orderSummaryModalContentHeadings
                                }
                            >
                                Accessories:
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            container
                            direction="column"
                            alignItems="center"
                            xs={6}
                        >
                            <Typography
                                className={classes.orderSummaryModalContentData}
                            >
                                x{collection.track.length}
                            </Typography>
                            <Typography
                                className={classes.orderSummaryModalContentData}
                            >
                                x{collection.fabric.length}
                            </Typography>
                            <Typography
                                className={classes.orderSummaryModalContentData}
                            >
                                x{collection.accessory.length}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider className={classes.orderSummaryDivider} />
        </Box>
    )
}

export default PurchasedCollection
