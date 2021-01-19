import React from "react"
// STYLES
import { Grid, Divider } from "@material-ui/core"
import useStyles from "../navigation/NavigationStyles"

function CurtainCoDivider() {
    const classes = useStyles()
    return (
        <Grid container direction="row" spacing={1}>
            <Grid item xs={11}>
                <Divider className={classes.curtainCoDividerColor} />
            </Grid>
            <Grid item container alignItems="flex-start" xs={1}>
                <div className={classes.curtainCoDividerDot} />
            </Grid>
        </Grid>
    )
}

export default CurtainCoDivider
