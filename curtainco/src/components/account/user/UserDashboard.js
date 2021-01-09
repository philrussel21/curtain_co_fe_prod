import React from "react"
import { Container, Grid } from "@material-ui/core"

import ProfileInformation from "./ProfileInformation"
import PurchaseHistory from "./PurchaseHistory"
import CTARequestConsultation from "./CTARequestConsultation"
import LoadingSymbol from "../../reusable/LoadingSymbol"

function UserDashboard({ isLoading }) {
    return (
        <Container>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={5}>
                    <ProfileInformation />
                </Grid>
                <Grid item container xs={7}>
                    <PurchaseHistory isLoading={isLoading} />
                </Grid>
            </Grid>
            <CTARequestConsultation />
        </Container>
    )
}

export default UserDashboard
