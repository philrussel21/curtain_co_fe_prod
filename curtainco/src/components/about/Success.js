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

function Success() {
    const classes = useStyles()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.only("xs"))

    return (
        <Grid
            container
            direction={isMobile ? "column-reverse" : "row"}
            item
            justify="center"
            alginItems="center"
            spacing={2}
        >
            <Grid item container justify="center" sm={6}>
                <img
                    src="https://images.unsplash.com/photo-1508024043938-d0cfe70cf65d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=981&q=80"
                    alt="Reflecting success"
                    className={classes.aboutMeImg}
                />
            </Grid>
            <Grid item sm={6}>
                <Grid
                    item
                    container
                    justify={isMobile ? "flex-start" : "center"}
                    // alignItems="center"
                >
                    <Typography
                        variant="h3"
                        component="h3"
                        className={classes.aboutMeMsgHeader}
                    >
                        Our Success
                    </Typography>
                    <Typography variant="body1" className={classes.aboutMeMsg}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laboriosam hic non temporibus ipsa ex consectetur libero
                        doloremque maiores quidem consequuntur nemo delectus eum
                        quo sed error, quod distinctio nihil inventore.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Success
