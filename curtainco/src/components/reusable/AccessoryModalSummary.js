import React from "react"
// STYLES
import { Grid, Typography } from "@material-ui/core"
// HELPERS AND SERVICES
import { capitalize } from "../../helpers/appHelpers"
import useStyles from "./ModalStyles"

function AccessoryModalSummary({ product }) {
    const classes = useStyles()
    return (
        <Grid item container>
            <Grid item container direction="column" xs={6}>
                <Typography>Type:</Typography>
            </Grid>
            <Grid item container direction="column" xs={6}>
                <Typography className={classes.modalData}>
                    {product.type !== undefined && capitalize(product.type)}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default AccessoryModalSummary
