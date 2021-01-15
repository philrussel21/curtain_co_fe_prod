import React, { useState, useEffect } from "react"
// STYLES
import {
    Button,
    Grid,
    Divider,
    Container,
    // useMediaQuery,
} from "@material-ui/core"
import useStyles from "./NavigationStyles"
// STATE
import { useCurtainContext } from "../../config/CurtainCoContext"
// HELPERS AND SERVICES
import { Link, useLocation } from "react-router-dom"
// COMPONENTS
import {
    Mobile,
    Desktop,
    MobileAndTablet,
    Default,
} from "../reusable/Responsive"
import Contact from "./Contact"
import Legal from "./Legal"
import CurtainCoDivider from "../reusable/CurtainCoDivider"
import RequestConsultationButton from "./RequestConsultationButton"

export default function StickyFooter() {
    const classes = useStyles()
    const [hideButton, setHideButton] = useState(false)
    const location = useLocation()

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
            <Default>
                <div className={classes.footerRoot}>
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
                                        <RequestConsultationButton
                                            size={"large"}
                                        />
                                    )}
                                </Grid>
                                <Grid item container xs={4}>
                                    <Legal />
                                </Grid>
                            </Grid>
                        </Grid>
                    </footer>
                </div>
            </Default>

            {/* MOBILE STYLES  */}

            <Mobile>
                <footer className={classes.footerMobile}>
                    <CurtainCoDivider />

                    <Grid
                        container
                        direction="column"
                        spacing={2}
                        className={classes.footerDetailsCont}
                    >
                        <Grid item container justify="space-between" xs={12}>
                            <Grid item container xs={6}>
                                <Link to="/">
                                    <img
                                        src="/logo192.png"
                                        alt="curtain co logo"
                                        style={{
                                            width: "100px",
                                            position: "relative",
                                            right: "10px",
                                        }}
                                    />
                                </Link>
                            </Grid>
                            <Grid
                                item
                                container
                                direction="column"
                                alignItems="flex-end"
                                xs={6}
                            >
                                <Contact />
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            container
                            justify="center"
                            alignItems="center"
                        >
                            {/* HIDING THE REQUEST CONSULTATION BUTTON TO THIS ROUTE SO THAT PEOPLE
                        DON'T THINK TO PRESS THIS BUTTON TO SUBMIT IT AND RELOAD THE PAGE
                        ACCIDENTALLY */}
                            {!hideButton && (
                                <RequestConsultationButton size={"large"} />
                            )}
                        </Grid>
                        <Grid item container justify="space-around">
                            <Legal />
                        </Grid>
                    </Grid>
                </footer>
            </Mobile>
        </>
    )
}
