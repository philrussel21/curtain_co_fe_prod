import React from "react"
// STYLES
import { Container, Typography, Grid, Button } from "@material-ui/core"
import useStyles from "./UserDashboardStyles"
// PACKAGES
import { Link } from "react-router-dom/cjs/react-router-dom.min"
// STATE
import { useCurtainContext } from "../../../config/CurtainCoContext"

function CTARequestConsultation({ isMobile }) {
    const classes = useStyles()
    const { state } = useCurtainContext()
    return (
        <Container maxWidth="md" className={classes.textCenter}>
            <Grid container spacing={2}>
                <Grid item container justify="center">
                    <Typography
                        variant="h4"
                        className={classes.userDashboardSubheading}
                        style={{ fontSize: isMobile ? 32 : 45 }}
                    >
                        Ready To Get Started?
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        variant="body1"
                        className={classes.userDashBoardCTAText}
                    >
                        {state.currentUser.orders > 0
                            ? "Now that you have your box of collections, request a consultation for one of our experienced designer installers to help size up and order your curtain packages."
                            : "Head over and view our customised collections of samples by an interior designer, or pick out some individual samples to be able to make your own collection."}
                    </Typography>
                </Grid>
                {/* <Button variant="outlined" color="primary" >
                <Link to="/request" className={classes.link}>
                    Request Consultation
                </Link>
            </Button> */}
            </Grid>
        </Container>
    )
}

export default CTARequestConsultation
