import React from "react"
// STYLES
import { Grid, Typography, useTheme } from "@material-ui/core"
import useStyles from "./NavigationStyles"
// COMPONENTS
import Copyright from "../authentication/Copyright"

function Legal() {
    const classes = useStyles()
    const theme = useTheme()

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
                    style={{
                        fontFamily: theme.typography.fontFamily.split(",")[1],
                        letterSpacing: "1px",
                    }}
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
                    // className={classes.footerText}
                >
                    Site by{" "}
                    <a
                        href="https://www.simonmcurran.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Simon Curran
                    </a>{" "}
                    &{" "}
                    <a
                        href="https://philantiporda.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Phil Antiporda
                    </a>
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Legal
