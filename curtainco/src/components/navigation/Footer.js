import React, { useState, useEffect } from "react"
// STYLES
import {
    CssBaseline,
    Typography,
    Button,
    Grid,
    Divider,
} from "@material-ui/core"
import useStyles from "./NavigationStyles"
// HELPERS AND SERVICES
import { Link, useHistory } from "react-router-dom"
// COMPONENTS
import Contact from "./Contact"
import Legal from "./Legal"

export default function StickyFooter() {
    const classes = useStyles()
    const history = useHistory()
    const [hideButton, setHideButton] = useState(false)

    useEffect(() => {
        setHideButton(false)
        if (history.location.pathname === "/request") setHideButton(true)
    }, [history])

    return (
        <div className={classes.footerRoot}>
            <CssBaseline />

            <footer className={classes.footer}>
                <Divider />
                <Grid container>
                    <Contact />

                    <Grid
                        item
                        sm={8}
                        container
                        justify="center"
                        alignItems="center"
                    >
                        {/* HIDING THE REQUEST CONSULTATION BUTTON TO THIS ROUTE SO THAT PEOPLE
                        DON'T THINK TO PRESS THIS BUTTON TO SUBMIT IT AND RELOAD THE PAGE
                        ACCIDENTALLY */}
                        {hideButton ? (
                            ""
                        ) : (
                            <Button variant="contained" color="primary">
                                <Link to="/request" className={classes.link}>
                                    Request Consultation
                                </Link>
                            </Button>
                        )}
                    </Grid>

                    <Legal />
                </Grid>
            </footer>
        </div>
    )
}
