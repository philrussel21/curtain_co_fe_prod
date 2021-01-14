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
        <Container>
            <Grid
                container
                direction="column"
                justify="space-between"
                alignItems
                className={classes.userDashboardCont}
                spacing={isMobile ? 4 : 6}
            >
                <Grid item container direction="row" spacing={isMobile ? 4 : 0}>
                    <Grid item xs={12} sm={5}>
                        <ProfileInformation isMobile={isMobile} />
                    </Grid>
                    <Grid
                        item
                        container
                        alignItems="flex-start"
                        xs={12}
                        sm={7}
                        style={{ height: "100%" }}
                    >
                        <PurchaseHistory
                            isLoading={isLoading}
                            isMobile={isMobile}
                        />
                    </Grid>
                </Grid>

                <Grid item>
                    <CTARequestConsultation isMobile={isMobile} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default UserDashboard
