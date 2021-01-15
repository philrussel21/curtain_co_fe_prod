import React from "react"
import {
    Grid,
    Divider,
    Box,
    Typography,
    useMediaQuery,
    useTheme,
} from "@material-ui/core"
import { capitalize } from "../../../helpers/appHelpers"
import useStyles from "../../reusable/ModalStyles"

function PurchasedProduct({ qty, product }) {
    const classes = useStyles()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.only("xs"))

    return (
        <Box m={1}>
            <Grid
                item
                container
                justify="center"
                alignItems="center"
                spacing={2}
            >
                <Grid item container justify="flex-start" xs={2}>
                    <Grid item>
                        <img
                            src={
                                product.imgUrl !== undefined
                                    ? product.imgUrl
                                    : "/no-image.png"
                            }
                            alt={product.name}
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
                            {capitalize(product.name)}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography>QTY: x {qty}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>
                            ${qty * product.price.toFixed(2)}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    direction="column"
                    justify="center"
                    alignItems="flex-start"
                    xs={4}
                >
                    <Grid item>
                        <Typography
                            className={classes.orderSummaryModalContentTitle}
                        >
                            Details
                        </Typography>
                    </Grid>
                    <Grid item container>
                        <Grid item container direction="column" xs={6}>
                            <Typography
                                className={
                                    classes.orderSummaryModalContentHeadings
                                }
                            >
                                Category:
                            </Typography>
                            <Typography
                                className={
                                    classes.orderSummaryModalContentHeadings
                                }
                            >
                                Colour:
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
                                {product.category}
                            </Typography>
                            <Typography
                                className={classes.orderSummaryModalContentData}
                            >
                                {capitalize(product.colour)}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider className={classes.orderSummaryDivider} />
        </Box>
    )
}

export default PurchasedProduct
