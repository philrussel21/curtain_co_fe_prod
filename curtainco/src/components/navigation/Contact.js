import React from "react"
// STYLES
import { Grid, Typography } from "@material-ui/core"
import useStyles from "./NavigationStyles"
// ICONS
// import InstagramIcon from "@material-ui/icons/Instagram"
// import FacebookIcon from "@material-ui/icons/Facebook"
import SocialLinkButton from "../reusable/SocialLinkButton"
// COMPONENTS

function Contact() {
    const classes = useStyles()
    return (
        <Grid item container direction="column" spacing={1}>
            <Grid item container justify="flex-start" spacing={1}>
                <Grid item>
                    <SocialLinkButton
                        text="fb"
                        link="https://www.facebook.com/marie.gjorg/"
                    />
                </Grid>
                <Grid item>
                    <SocialLinkButton
                        text="in"
                        link="https://www.instagram.com/marie_g_builder/"
                    />
                </Grid>
            </Grid>

            <Grid item container justify="flex-start" spacing={2}>
                <Grid item>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        className={classes.footerText}
                    >
                        0400 111 222
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        className={classes.footerText}
                    >
                        <a href="mailto:marie@email.com?">marie@email.com</a>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Contact
