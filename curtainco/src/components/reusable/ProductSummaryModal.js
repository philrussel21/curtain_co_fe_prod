import React from "react"
// STYLES
import { Grid, Typography, IconButton } from "@material-ui/core"
import useStyles from "./ModalStyles"
// ICONS
import CloseIcon from "@material-ui/icons/Close"
// COMPONENTS
import AddToCartButton from "./AddToCartButton"
import TrackModalSummary from "./TrackModalSummary"
import FabricModalSummary from "./FabricModalSummary"
import AccessoryModalSummary from "./AccessoryModalSummary"
// HELPERS AND SERVICES
import { capitalize } from "../../helpers/appHelpers"

function ProductSummaryModal({ data, title, handleCartClick, handleClose }) {
    const classes = useStyles()
    console.log(data)
    return (
        <Grid container spacing={3}>
            <Grid item container xs={5} justify="center" alignItems="center">
                <div role="img">
                    <img
                        src={
                            data.imgUrl === undefined
                                ? "/no-image.png"
                                : data.imgUrl
                        }
                        alt={data.name}
                        className={classes.modalImage}
                    />
                </div>
            </Grid>
            <Grid
                item
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
                xs={7}
            >
                <Grid
                    item
                    container
                    justify="space-between"
                    className={classes.closeButtonCont}
                >
                    <Grid item container justify="center" xs={9}>
                        <Typography
                            variant="h3"
                            component="h3"
                            className={classes.modalTitle}
                        >
                            {capitalize(title)}
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <IconButton
                            onClick={handleClose}
                            className={classes.closeButton}
                        >
                            <CloseIcon color="error" />
                        </IconButton>
                    </Grid>
                </Grid>
                {/* <Grid item>
                    <Typography>{message}</Typography>
                </Grid> */}

                <Grid item style={{ paddingBottom: "2%" }}>
                    <Typography className={classes.modalData}>
                        {data.description !== undefined &&
                            capitalize(data.description)}
                    </Typography>
                </Grid>

                <Grid item container>
                    <Grid item container direction="column" xs={6}>
                        <Typography>Price:</Typography>
                    </Grid>
                    <Grid item container direction="column" xs={6}>
                        <Grid item>
                            <Typography className={classes.modalData}>
                                ${data.price}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item container>
                    {data.category === "Fabric" ? (
                        <FabricModalSummary product={data} />
                    ) : data.category === "Track" ? (
                        <TrackModalSummary product={data} />
                    ) : (
                        <AccessoryModalSummary product={data} />
                    )}
                </Grid>
                <Grid
                    item
                    container
                    justify="flex-end"
                    alignItems="center"
                    style={{ marginTop: "3%" }}
                >
                    <AddToCartButton
                        icon={false}
                        text={"Add To Cart"}
                        handleClick={handleCartClick}
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ProductSummaryModal
