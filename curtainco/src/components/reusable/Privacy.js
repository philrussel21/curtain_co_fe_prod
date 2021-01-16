import React from "react"
// STYLES
import { Typography } from "@material-ui/core"
import useStyles from "../navigation/NavigationStyles"

function Privacy() {
    const classes = useStyles()

    return (
        <Typography
            variant="body2"
            color="textPrimary"
            align="center"
            className={classes.privacy}
        >
            Privacy-Terms
        </Typography>
    )
}

export default Privacy
