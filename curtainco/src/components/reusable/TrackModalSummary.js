import React from "react"
// STYLES
import { Grid, Typography } from "@material-ui/core"
import useStyles from "../reusable/ModalStyles"
// HELPERS AND SERVICES
import { capitalize } from "../../helpers/appHelpers"

function TrackModalSummary({ product }) {
    const classes = useStyles()
    return (
        <Grid item container>
            <Grid item direction="column" xs={6}>
                <Typography>Type:</Typography>
                <Typography>Single/Double:</Typography>
                <Typography>Finial Style:</Typography>
                <Typography>Finial Colour:</Typography>
                <Typography>Location:</Typography>
            </Grid>
            <Grid item direction="column" xs={6}>
                <Typography className={classes.modalData}>
                    {capitalize(product.type)}
                </Typography>
                <Typography className={classes.modalData}>
                    {product.single ? "Single" : "Double"}
                </Typography>
                <Typography className={classes.modalData}>
                    {capitalize(product.finialStyle)}
                </Typography>
                <Typography className={classes.modalData}>
                    {capitalize(product.finialColour)}
                </Typography>
                <Typography className={classes.modalData}>
                    {capitalize(product.location)}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default TrackModalSummary
