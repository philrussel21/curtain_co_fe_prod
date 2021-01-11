import React from "react"
// HELPERS AND SERVICES
import { logoutUser } from "../../services/authServices"
import { setErrorSnackBar } from "../../helpers/appHelpers"
// STATE
import { ACTIONS } from "../../config/stateReducer"
import { useCurtainContext } from "../../config/CurtainCoContext"
// STYLES
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core"
import useStyles from "./NavigationStyles"
// COMPONENTS
// PACKAGES
import { Link, withRouter } from "react-router-dom"

function NavBar() {
    const classes = useStyles()
    const { state, dispatch } = useCurtainContext()

    function handleLogout(e) {
        e.preventDefault()

        logoutUser()
            .then((resp) => {
                console.log("Got back response on logout", resp)
                // logout the user locally
                if (resp.status === 204) {
                    dispatch({ type: ACTIONS.LOGOUT })
                    console.log("logging out")
                }
            })
            .catch((error) => {
                setErrorSnackBar(
                    dispatch,
                    `Something went wrong and you were not logged out`
                )
                console.log(
                    "The server may be down - caught an exception on logout:",
                    error
                )
            })
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    <Link className={classes.link} to="/">
                        The Curtain Co
                    </Link>
                </Typography>

                <Button color="inherit">
                    <Link className={classes.link} to="/">
                        Home
                    </Link>
                </Button>

                <Button color="inherit">
                    <Link className={classes.link} to="/collections">
                        Collections
                    </Link>
                </Button>

                <Button color="inherit">
                    <Link className={classes.link} to="/products">
                        Products
                    </Link>
                </Button>

                <Button color="inherit">
                    <Link className={classes.link} to="/about">
                        About
                    </Link>
                </Button>

                <Button color="inherit">
                    <Link className={classes.link} to="/cart">
                        Cart
                    </Link>
                </Button>

                {state.currentUser !== null ? (
                    <Button color="inherit">
                        <Link className={classes.link} to="/account">
                            Account
                        </Link>
                    </Button>
                ) : (
                    ""
                )}

                {state.currentUser !== null ? (
                    <Button color="inherit" onClick={handleLogout}>
                        <Link className={classes.link} to="/">
                            Logout
                        </Link>
                    </Button>
                ) : (
                    <Button color="inherit">
                        <Link
                            className={classes.link}
                            to={{
                                pathname: "/login",
                                state: {
                                    prevUrl: window.location.href,
                                },
                            }}
                        >
                            Login
                        </Link>
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default withRouter(NavBar)
