import React from "react"
// STYLES
import { Grid } from "@material-ui/core"
// PACKAGES
import { Link } from "react-router-dom"
// COMPONENTS
import CurtainCoImg from "../reusable/CurtainCoImg"

function HeroBanner({ getBorderRadius, getImgHeight }) {
    return (
        <Grid item xs={12}>
            <Link to={`/collections`} className="link">
                <CurtainCoImg
                    imageSrc={
                        "https://images.unsplash.com/photo-1467635624863-33cf388d9a2e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    }
                    border
                    text="View Our Collections"
                    getBorderRadius={getBorderRadius}
                    getImgHeight={getImgHeight}
                />
            </Link>
        </Grid>
    )
}

export default HeroBanner
