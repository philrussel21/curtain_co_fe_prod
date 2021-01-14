import React from "react"
// STYLES
import { Grid, Typography } from "@material-ui/core"
// HELPERS AND SERVICES
import { capitalize } from "../../helpers/appHelpers"

function AccessoryModalSummary({ product }) {
    return (
        <Grid container direction="column">
            <Grid item>
                <Typography>
                    Type:{" "}
                    {product.type !== undefined && capitalize(product.type)}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default AccessoryModalSummary
