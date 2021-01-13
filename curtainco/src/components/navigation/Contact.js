import React from "react"
// STYLES
import { Grid, Typography } from "@material-ui/core"
// ICONS
// import InstagramIcon from "@material-ui/icons/Instagram"
// import FacebookIcon from "@material-ui/icons/Facebook"
import SocialLinkButton from "../reusable/SocialLinkButton"
// COMPONENTS

function Contact() {
    return (
        <Grid item container direction="column" spacing={1}>
            <Grid item container justify="flex-start">
                <Grid item xs={1}>
                    <SocialLinkButton
                        text="fb"
                        link="https://www.facebook.com/marie.gjorg/"
                    />
                </Grid>
                <Grid item xs={1}>
                    <SocialLinkButton
                        text="in"
                        link="https://www.instagram.com/marie_g_builder/"
                    />
                </Grid>
            </Grid>
            <Grid item container justify="flex-start">
                <Grid item xs={3}>
                    <Typography variant="body2" color="textSecondary">
                        0400 111 222
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    {" "}
                    -{" "}
                </Grid>
                <Grid item>
                    <Typography variant="body2" color="textSecondary">
                        marie@email.com
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Contact
