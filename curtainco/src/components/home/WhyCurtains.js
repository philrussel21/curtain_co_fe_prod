import React from "react"
// STYLES
import { Grid, Button, Typography } from "@material-ui/core"
import useStyles from "./HomeStyles"
// PACKAGES
import { Link } from "react-router-dom"

function WhyCurtains() {
    const classes = useStyles()
    return (
        <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={2}
            className={classes.WhyCurtainsCont}
        >
            <Grid item container justify="center">
                <Typography variant="h3" component="h3">
                    Why Curtains?
                </Typography>
            </Grid>

            <Grid item>
                <Typography variant="body1" style={{ fontStyle: "italic" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur maiores veritatis tempora nostrum, laudantium
                    repellat voluptatem, error hic ipsum in debitis doloribus
                    nulla autem odit voluptas soluta asperiores deleniti
                    perspiciatis!
                </Typography>
            </Grid>

            <Grid item>
                <Link to={`/collections`} className="link">
                    <Button variant="contained" color="primary" size="large">
                        Collections
                    </Button>
                </Link>
            </Grid>
        </Grid>
    )
}

export default WhyCurtains
