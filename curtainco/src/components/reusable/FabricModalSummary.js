import React from "react"
// STYLES
import { Grid, Typography } from "@material-ui/core"
// HELPERS AND SERVICES
import { capitalize } from "../../helpers/appHelpers"
import useStyles from "./ModalStyles"

function FabricModalSummary({ product }) {
    const classes = useStyles()
    return (
        <Grid item container>
            <Grid item direction="column" xs={6}>
                <Typography>Density:</Typography>
                <Typography>Style:</Typography>
                <Typography>Size:</Typography>
                <Typography>Length:</Typography>
            </Grid>
            <Grid item direction="column" xs={6}>
                <Typography className={classes.modalData}>
                    {capitalize(product.density)}
                </Typography>
                <Typography className={classes.modalData}>
                    {capitalize(product.style)}
                </Typography>
                <Typography className={classes.modalData}>
                    {capitalize(product.size)}
                </Typography>
                <Typography className={classes.modalData}>
                    {capitalize(product.length)}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default FabricModalSummary
