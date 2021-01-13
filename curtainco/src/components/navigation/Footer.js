import React, { useState, useEffect } from "react"
// STYLES
import {
    CssBaseline,
    Button,
    Grid,
    Divider,
    Typography,
    Container,
    // useMediaQuery,
} from "@material-ui/core"
import useStyles from "./NavigationStyles"
// STATE
import { useCurtainContext } from "../../config/CurtainCoContext"
// HELPERS AND SERVICES
import { Link, useLocation } from "react-router-dom"
// COMPONENTS
import { Mobile, Desktop } from "../reusable/Responsive"
import Contact from "./Contact"
import Legal from "./Legal"
import CurtainCoDivider from "../reusable/CurtainCoDivider"

export default function StickyFooter() {
    const classes = useStyles()
    const [hideButton, setHideButton] = useState(false)
    const location = useLocation()
    // const isPortrait = useMediaQuery("(orientation: portrait)")
    // console.log({ isPortrait })

    useEffect(() => {
        // THIS HIDES THE BUTTON ON THE REQUEST CONSULTATION PAGE
        // SO PEOPLE DON'T CONFUSE THE BUTTONS TO SUBMIT THE FORM
        if (location !== undefined && location.pathname === "/request") {
            setHideButton(true)
        } else {
            setHideButton(false)
        }
    }, [location])

    return (
        <>
            <Desktop>
                <div className={classes.footerRoot}>
                    {/* <CssBaseline /> */}

                    <footer className={classes.footer}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item container style={{ width: "108%" }}>
                                <CurtainCoDivider />
                            </Grid>
                            <Grid
                                item
                                container
                                direction="row"
                                justify="space-around"
                                alignItems="center"
                            >
                                <Grid item xs={4}>
                                    <Contact />
                                </Grid>

                                <Grid
                                    item
                                    // sm={8}
                                    container
                                    justify="center"
                                    alignItems="center"
                                    xs={4}
                                >
                                    {/* HIDING THE REQUEST CONSULTATION BUTTON TO THIS ROUTE SO THAT PEOPLE
                        DON'T THINK TO PRESS THIS BUTTON TO SUBMIT IT AND RELOAD THE PAGE
                        ACCIDENTALLY */}
                                    {!hideButton && (
                                        <Link
                                            to="/request"
                                            style={{ textDecoration: "none" }}
                                        >
                                            <Grid
                                                item
                                                container
                                                justify="center"
                                            >
                                                <Button
                                                    variant="outlined"
                                                    color="primary"
                                                    size="large"
                                                >
                                                    Request Consultation
                                                </Button>
                                            </Grid>
                                        </Link>
                                    )}
                                </Grid>
                                <Grid item container xs={4}>
                                    <Legal />
                                </Grid>
                            </Grid>
                        </Grid>
                    </footer>
                </div>
            </Desktop>
            <Mobile>
                <footer className={classes.footerMobile}>
                    <Container>
                        <Divider />

                        <Grid
                            container
                            direction="column"
                            spacing={2}
                            className={classes.footerDetailsCont}
                        >
                            <Grid item container justify="space-around" xs={12}>
                                <Grid item container xs={6}>
                                    <img
                                        src="/CurtainCoLogo192.png"
                                        alt="curtain co logo"
                                        style={{ width: "70px" }}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    container
                                    direction="column"
                                    alignItems="flex-end"
                                    xs={6}
                                >
                                    <Grid item>social links</Grid>
                                    <Grid item>phone</Grid>
                                    <Grid item>email</Grid>
                                </Grid>
                            </Grid>
                            <Grid
                                item
                                container
                                justify="center"
                                alignItems="center"
                            >
                                <Link to="/request" className={classes.link}>
                                    <Button variant="outlined">
                                        Request Consultation
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item container justify="space-around">
                                <Grid item>privacy</Grid>
                                <Grid item>copy right and year</Grid>
                            </Grid>
                            <Grid item container justify="center">
                                site by simon and phil
                            </Grid>
                        </Grid>
                    </Container>
                </footer>
            </Mobile>
        </>
    )
}
