import React from "react"
// STYLES
import { Container, Grid } from "@material-ui/core"
import useStyles from "./AboutStyles"
// COMPONENTS
import Story from "./Story"
import Success from "./Success"
import {
    // Desktop,
    DesktopAndTabletLandscape,
    // Mobile,
    MobileAndTabletPortrait,
} from "../reusable/Responsive"
// import Testimonial from "./Testimonial"

function About() {
    const classes = useStyles()
    return (
        <>
            <DesktopAndTabletLandscape>
                <Container>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        spacing={5}
                        className={classes.aboutMeCont}
                    >
                        <Story />
                        <Success />
                        {/* <Testimonial /> */}
                    </Grid>
                </Container>
            </DesktopAndTabletLandscape>

            <MobileAndTabletPortrait>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                    className={classes.aboutMeCont}
                >
                    <Story />
                    <Success />
                    {/* <Testimonial /> */}
                </Grid>
            </MobileAndTabletPortrait>
        </>
    )
}

export default About
