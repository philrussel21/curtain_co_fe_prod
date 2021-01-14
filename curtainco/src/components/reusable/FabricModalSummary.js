import React from "react"
// STYLES
import { Grid, Typography } from "@material-ui/core"
// HELPERS AND SERVICES
import { capitalize } from "../../helpers/appHelpers"

function FabricModalSummary({ product }) {
    return (
        <Grid container direction="column">
            <Grid item>
                <Typography>Density: {capitalize(product.density)}</Typography>
            </Grid>
            <Grid item>
                <Typography>Style: {capitalize(product.style)}</Typography>
            </Grid>
            <Grid item>
                <Typography>Size: {capitalize(product.size)}</Typography>
            </Grid>
            <Grid item>
                <Typography>Length: {capitalize(product.length)}</Typography>
            </Grid>
        </Grid>
    )
}

export default FabricModalSummary
