import React from "react"
// STYLES
import { Typography } from "@material-ui/core"
import useStyles from "./AboutStyles"
// PACKAGES
import { Link } from "react-router-dom/cjs/react-router-dom.min"

function CheckOutRange() {
    const classes = useStyles()
    return (
        <>
            <Typography
                variant="h3"
                component="h3"
                className={classes.aboutMeMsgHeader}
            >
                Check Out Our Collections
            </Typography>

            <Typography>
                To view our range, head to{" "}
                <Link to="/collections" className={classes.aboutMeRangeLinks}>
                    our collections
                </Link>{" "}
                and{" "}
                <Link to="/products" className={classes.aboutMeRangeLinks}>
                    our products
                </Link>{" "}
                page for more.
            </Typography>
        </>
    )
}

export default CheckOutRange
