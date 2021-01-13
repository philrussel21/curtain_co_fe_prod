import React from "react"
// STYLES
import {
    Grid,
    Typography,
    Container,
    useMediaQuery,
    useTheme,
} from "@material-ui/core"
import useStyles from "./AboutStyles"

function Story() {
    const classes = useStyles()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.only("xs"))

    return (
        <Grid item container justify="center" spacing={2}>
            <Grid item sm={6}>
                <Grid container justify={isMobile ? "flex-start" : "center"}>
                    <Typography
                        variant="h3"
                        component="h3"
                        className={classes.aboutMeMsgHeader}
                    >
                        Our Story
                    </Typography>

                    <Typography variant="body1" className={classes.aboutMeMsg}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laboriosam hic non temporibus ipsa ex consectetur libero
                        doloremque maiores quidem consequuntur nemo delectus eum
                        quo sed error, quod distinctio nihil inventore.
                    </Typography>
                </Grid>
            </Grid>

            <Grid item container justify="center" sm={6}>
                <img
                    src="https://images.unsplash.com/photo-1519710889408-a67e1c7e0452?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                    alt="Reflecting story"
                    className={classes.aboutMeImg}
                />
            </Grid>
        </Grid>
    )
}

export default Story
