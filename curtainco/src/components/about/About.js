import React from "react"
// STYLES
import { Container, Grid } from "@material-ui/core"
import useStyles from "./AboutStyles"
// COMPONENTS
import Story from "./Story"
import Success from "./Success"
import {
    Desktop,
    Mobile,
    MobileAndTabletPortrait,
} from "../reusable/Responsive"
// import Testimonial from "./Testimonial"

function About() {
    const classes = useStyles()
    return (
        <>
            <Desktop>
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
            </Desktop>

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
