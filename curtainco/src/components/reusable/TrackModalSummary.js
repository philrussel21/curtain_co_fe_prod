import React from "react"
// STYLES
import { Grid, Typography } from "@material-ui/core"
// HELPERS AND SERVICES
import { capitalize } from "../../helpers/appHelpers"

function TrackModalSummary({ product }) {
    return (
        <Grid container direction="column">
            <Grid item>
                <Typography>Type: {capitalize(product.type)}</Typography>
            </Grid>
            <Grid item>
                <Typography>
                    Single/Double: {product.single ? "Single" : "Double"}
                </Typography>
            </Grid>
            <Grid item>
                <Typography>
                    Finial Style: {capitalize(product.finialStyle)}
                </Typography>
            </Grid>
            <Grid item>
                <Typography>
                    Finial Colour: {capitalize(product.finialColour)}
                </Typography>
            </Grid>
            <Grid item>
                <Typography>
                    Location: {capitalize(product.location)}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default TrackModalSummary
