import React from "react"

// import { Link } from "react-router-dom";
import { Typography, useTheme } from "@material-ui/core"
import useStyles from "../reusable/UserDataFormStyles"

function Copyright() {
    // const classes = useStyles()
    const theme = useTheme()
    return (
        <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            style={{
                fontFamily: theme.typography.fontFamily.split(",")[1],
                letterSpacing: "1px",
            }}
        >
            {"Copyright © "}
            {/* <Link color="inherit" className={classes.link} to="https://material-ui.com/">
                Your Website
            </Link> */}
            {"The Curtain Co"} {new Date().getFullYear()}
            {"."}
        </Typography>
    )
}

export default Copyright
