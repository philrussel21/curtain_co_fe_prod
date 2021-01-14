import React from "react"
// STYLES
import { Grid, Button } from "@material-ui/core"
// PACKAGES
import { Link } from "react-router-dom"

function RequestConsultationButton({ size }) {
    return (
        <Link to="/request" style={{ textDecoration: "none" }}>
            <Grid item container justify="center">
                <Button variant="outlined" color="primary" size={size}>
                    Request Consultation
                </Button>
            </Grid>
        </Link>
    )
}

export default RequestConsultationButton
