import React from "react"
// STYLES
import { Container, Grid } from "@material-ui/core"
import useStyles from "./UserDashboardStyles"
// COMPONENTS
import ProfileInformation from "./ProfileInformation"
import PurchaseHistory from "./PurchaseHistory"
import CTARequestConsultation from "./CTARequestConsultation"

function UserDashboard({ isLoading }) {
    const classes = useStyles()
    return (
        <Container>
            <Grid
                container
                direction="column"
                justify="space-between"
                alignItems
                className={classes.userDashboardCont}
                spacing={6}
            >
                <Grid item container direction="row">
                    <Grid item xs={5}>
                        <ProfileInformation />
                    </Grid>
                    <Grid
                        item
                        container
                        alignItems="flex-start"
                        xs={7}
                        style={{ height: "100%" }}
                    >
                        <PurchaseHistory isLoading={isLoading} />
                    </Grid>
                </Grid>

                <Grid item>
                    <CTARequestConsultation />
                </Grid>
            </Grid>
        </Container>
    )
}

export default UserDashboard
