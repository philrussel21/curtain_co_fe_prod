import React from "react"
// STYLES
import { Grid, Typography } from "@material-ui/core"
// COMPONENTS
import Copyright from "../authentication/Copyright"

function Legal() {
    return (
        <Grid
            item
            container
            direction="column"
            alignItems="flex-end"
            justify="center"
            spacing={1}
        >
            <Grid item>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    align="center"
                >
                    Privacy-Terms
                </Typography>
            </Grid>
            <Grid item>
                <Copyright />
            </Grid>
            <Grid item>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    align="center"
                >
                    Site by{" "}
                    <a href="https://www.simonmcurran.com">Simon Curran</a> &{" "}
                    <a href="https://philantiporda.netlify.app/">
                        Phil Antiporda
                    </a>
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Legal
