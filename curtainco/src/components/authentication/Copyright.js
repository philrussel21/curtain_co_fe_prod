import React from "react"
// STYLES
import { Typography } from "@material-ui/core"
import useStyles from "../reusable/UserDataFormStyles"

function Copyright() {
    const classes = useStyles()
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            {"The Curtain Co"} {new Date().getFullYear()}
        </Typography>
    )
}

export default Copyright
