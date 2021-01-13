import React from "react"
// STYLES
import { Typography, Grid } from "@material-ui/core"
import useStyles from "./UserDashboardStyles"
// ICONS
import EmailIcon from "@material-ui/icons/Email"
import HomeIcon from "@material-ui/icons/Home"
import PhoneIcon from "@material-ui/icons/Phone"
import BusinessIcon from "@material-ui/icons/Business"
// SERVICES AND HELPERS
import { displayPhoneNumber } from "../../../helpers/appHelpers"

function ShowUserInformation({ user }) {
    const classes = useStyles()
    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={1}
        >
            <Grid item container justify="center" alignItems="center">
                <Grid item xs={1}>
                    <EmailIcon color="primary" />
                </Grid>
                <Grid item xs={11}>
                    <Typography className={classes.profileInfoDetails}>
                        {user.email}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container justify="center" alignItems="center">
                <Grid item xs={1}>
                    <HomeIcon color="primary" />
                </Grid>
                <Grid item xs={11}>
                    <Typography className={classes.profileInfoDetails}>
                        {`${user.address1}, ${user.suburb}, ${user.state}, ${user.postcode}`}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container justify="center" alignItems="center">
                <Grid item xs={1}>
                    <PhoneIcon color="primary" />
                </Grid>
                <Grid item xs={11}>
                    <Typography className={classes.profileInfoDetails}>
                        {displayPhoneNumber(user.phone)}
                    </Typography>
                </Grid>
            </Grid>
            {user.companyName && (
                <Grid item container justify="center" alignItems="center">
                    <Grid item xs={1}>
                        <BusinessIcon />
                    </Grid>
                    <Grid item xs={11}>
                        <Typography className={classes.profileInfoDetails}>
                            {user.companyName}
                        </Typography>
                    </Grid>
                </Grid>
            )}
        </Grid>
    )
}

export default ShowUserInformation
