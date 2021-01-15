import React from "react"
// STYLES
import { Container, Grid, useMediaQuery, useTheme } from "@material-ui/core"
import useStyles from "./UserDashboardStyles"
// COMPONENTS
import ProfileInformation from "./ProfileInformation"
import PurchaseHistory from "./PurchaseHistory"
import CTARequestConsultation from "./CTARequestConsultation"

function UserDashboard({ isLoading }) {
    const classes = useStyles()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.only("xs"))

    return (
        <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="center"
            className={classes.userDashboardCont}
            spacing={isMobile ? 4 : 6}
        >
            <Grid
                item
                container
                direction="row"
                justify="space-around"
                spacing={isMobile ? 4 : 0}
            >
                <Grid item container direction="column" xs={12} sm={6}>
                    <Grid item>
                        <ProfileInformation isMobile={isMobile} />
                    </Grid>
                    <Grid item className={classes.ctaRequestConsultCont}>
                        <CTARequestConsultation isMobile={isMobile} />
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    justify="flex-start"
                    alignItems="center"
                    xs={12}
                    sm={6}
                    style={{ height: "100%" }}
                >
                    <PurchaseHistory
                        isLoading={isLoading}
                        isMobile={isMobile}
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default UserDashboard
