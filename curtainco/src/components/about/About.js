import React from "react"

import { Grid } from "@material-ui/core"
import Story from "./Story"
import Success from "./Success"
import Testimonial from "./Testimonial"

function About() {
    return (
        <Grid container direction="column" alignItems="center" spacing={5}>
            <Story />
            <Success />
            <Testimonial />
        </Grid>
    )
}

export default About
