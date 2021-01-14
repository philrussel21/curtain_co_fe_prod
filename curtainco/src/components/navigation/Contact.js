import React from "react"
// STYLES
import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core"
import useStyles from "./NavigationStyles"
// ICONS
import InstagramIcon from "@material-ui/icons/Instagram"
import FacebookIcon from "@material-ui/icons/Facebook"
import SocialLinkButton from "../reusable/SocialLinkButton"
// COMPONENTS

function Contact() {
    const classes = useStyles()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.only("xs"))

    return (
        <Grid item container direction="column">
            <Grid
                item
                container
                justify={isMobile ? "flex-end" : "flex-start"}
                spacing={2}
            >
                <Grid item>
                    <a
                        href="https://www.facebook.com/marie.gjorg/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FacebookIcon color="secondary" />
                    </a>
                </Grid>
                <Grid item>
                    <a
                        href="https://www.instagram.com/marie_g_builder/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <InstagramIcon color="secondary" />
                    </a>
                </Grid>
            </Grid>

            <Grid item container justify={isMobile ? "flex-end" : "flex-start"}>
                <Typography
                    // variant="body2"
                    color="textSecondary"
                    className={classes.footerText}
                >
                    0400 111 222
                </Typography>
            </Grid>

            <Grid item container justify={isMobile ? "flex-end" : "flex-start"}>
                <Typography
                    // variant="body2"
                    color="textSecondary"
                    className={classes.footerEmailLink}
                >
                    <a href="mailto:marie@email.com?" className="link">
                        marie@email.com
                    </a>
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Contact
