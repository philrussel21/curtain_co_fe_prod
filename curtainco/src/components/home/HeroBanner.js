import { Grid } from "@material-ui/core"
import React from "react"
import { Link } from "react-router-dom"

function HeroBanner() {
    return (
        <Grid item sm={6}>
            <Link to={`/collections`}>
                <img src="/loading.gif/600x300" alt="Hero Banner" />
            </Link>
        </Grid>
    )
}

export default HeroBanner
