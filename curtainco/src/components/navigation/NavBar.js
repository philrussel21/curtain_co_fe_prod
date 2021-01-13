import React, { useState } from "react"
// HELPERS AND SERVICES
import { logoutUser } from "../../services/authServices"
import { setErrorSnackBar } from "../../helpers/appHelpers"
// STATE
import { ACTIONS } from "../../config/stateReducer"
import { useCurtainContext } from "../../config/CurtainCoContext"
// STYLES
import {
    AppBar,
    Toolbar,
    Typography,
    Fab,
    Menu,
    MenuItem,
    Grid,
    IconButton,
    withStyles,
    Badge,
    Divider,
} from "@material-ui/core"
import useStyles from "./NavigationStyles"
// ICONS
import MenuIcon from "@material-ui/icons/Menu"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
// COMPONENTS
import { Mobile, Desktop, Tablet } from "../reusable/Responsive"
// import MobileMenu from "./MobileMenu"
// PACKAGES
import { Link, withRouter } from "react-router-dom"

// MINOR COMPONENT FOR THE BADGE ON THE CART
const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
    },
}))(Badge)

function NavBar() {
    const classes = useStyles()
    const { state, dispatch } = useCurtainContext()
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)
    const mobileMenuId = "app-bar-mobile"

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget)
    }

    const handleMobileMenuClose = (e) => {
        setMobileMoreAnchorEl(null)
    }

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
                console.log(
                    "The server may be down - caught an exception on logout:",
                    error
                )
                setErrorSnackBar(
                    dispatch,
                    `Something went wrong and you were not logged out`
                )
            })
    }

    return (
        <>
            <Desktop>
                <AppBar
                    position="static"
                    color="transparent"
                    className={classes.appBar}
                >
                    <Toolbar disableGutters className={classes.toolBar}>
                        <Grid container direction="column">
                            <Grid item className={classes.dividerCont}>
                                <Divider
                                    variant="middle"
                                    className={classes.topNavBarDivider}
                                />
                            </Grid>
                            <Grid
                                item
                                container
                                justify="space-around"
                                alignItems="center"
                            >
                                <Grid item container justify="center" xs={1}>
                                    <Grid item>
                                        <Link
                                            className={classes.link}
                                            to="/collections"
                                        >
                                            <Typography variant="button">
                                                Collections
                                            </Typography>
                                        </Link>
                                    </Grid>
                                </Grid>
                                <Grid item container justify="center" xs={1}>
                                    <Grid item>
                                        <Link
                                            className={classes.link}
                                            to="/products"
                                        >
                                            <Typography variant="button">
                                                Samples
                                            </Typography>
                                        </Link>
                                    </Grid>
                                </Grid>

                                <Grid item container justify="center" xs={1}>
                                    <Grid item>
                                        <Link
                                            className={classes.link}
                                            to="/about"
                                        >
                                            <Typography variant="button">
                                                About
                                            </Typography>
                                        </Link>
                                    </Grid>
                                </Grid>

                                <Grid item container justify="center" xs={1}>
                                    <Grid item>
                                        <Link
                                            className={classes.navbarLogoCont}
                                            to="/"
                                        >
                                            <img
                                                src="/logo512.png"
                                                alt="the curtain co logo"
                                                className={
                                                    classes.navBarLogoImg
                                                }
                                            />
                                        </Link>
                                    </Grid>
                                </Grid>

                                <Grid item container justify="center" xs={1}>
                                    <Grid item>
                                        <Link
                                            className={classes.link}
                                            to={
                                                state.currentUser !== null
                                                    ? "/account"
                                                    : "/login"
                                            }
                                        >
                                            <Typography variant="button">
                                                Account
                                            </Typography>
                                        </Link>
                                    </Grid>
                                </Grid>

                                <Grid item container justify="center" xs={1}>
                                    <Grid item>
                                        {state.currentUser !== null ? (
                                            <Grid
                                                item
                                                container
                                                justify="center"
                                            >
                                                <Link
                                                    className={classes.link}
                                                    to="/"
                                                    onClick={handleLogout}
                                                >
                                                    <Typography variant="button">
                                                        Logout
                                                    </Typography>
                                                </Link>
                                            </Grid>
                                        ) : (
                                            <Grid
                                                item
                                                container
                                                justify="center"
                                            >
                                                <Link
                                                    className={classes.link}
                                                    to={{
                                                        pathname: "/login",
                                                        state: {
                                                            prevUrl:
                                                                window.location
                                                                    .href,
                                                        },
                                                    }}
                                                >
                                                    <Typography variant="button">
                                                        Login
                                                    </Typography>
                                                </Link>
                                            </Grid>
                                        )}
                                    </Grid>
                                </Grid>

                                <Grid
                                    item
                                    container
                                    justify="center"
                                    alignItems="center"
                                    xs={1}
                                >
                                    <Link
                                        className={classes.iconButtonLink}
                                        to="/cart"
                                    >
                                        <IconButton aria-label="cart">
                                            <StyledBadge
                                                badgeContent={state.cartLength}
                                                color="secondary"
                                            >
                                                <ShoppingCartIcon />
                                            </StyledBadge>
                                        </IconButton>
                                    </Link>
                                </Grid>
                            </Grid>
                            <Grid item className={classes.dividerCont}>
                                <Divider
                                    variant="middle"
                                    className={classes.bottomNavBarDivider}
                                />
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Desktop>

            {/* MOBILE STYLES */}

            <Mobile>
                <Link to={"/"} className={classes.link}>
                    <Typography variant="h4" className={classes.mobileHeader}>
                        THE CURTAIN CO
                    </Typography>
                </Link>
                <AppBar position="fixed" className={classes.appBarMobile}>
                    <div className={classes.sectionMobile}>
                        <Fab
                            color="primary"
                            aria-label="menu"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            size="large"
                        >
                            <MenuIcon />
                        </Fab>
                    </div>

                    <Menu
                        anchorEl={mobileMoreAnchorEl}
                        anchorOrigin={{ vertical: "top", horizontal: "left" }}
                        getContentAnchorEl={null}
                        id={mobileMenuId}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                        open={isMobileMenuOpen}
                        onClose={handleMobileMenuClose}
                        position="fixed"
                        className
                    >
                        <MenuItem>
                            <Link
                                onClick={handleMobileMenuClose}
                                className={classes.link}
                                to={"/"}
                            >
                                <Typography
                                    variant="button"
                                    className={classes.mobileMenuItemText}
                                >
                                    home
                                </Typography>
                            </Link>
                        </MenuItem>

                        <MenuItem>
                            <Link
                                onClick={handleMobileMenuClose}
                                className={classes.link}
                                to={"/collections"}
                            >
                                <Typography
                                    variant="button"
                                    className={classes.mobileMenuItemText}
                                >
                                    collections
                                </Typography>
                            </Link>
                        </MenuItem>

                        <MenuItem>
                            <Link
                                onClick={handleMobileMenuClose}
                                className={classes.link}
                                to={"/products"}
                            >
                                <Typography
                                    variant="button"
                                    className={classes.mobileMenuItemText}
                                >
                                    products
                                </Typography>
                            </Link>
                        </MenuItem>

                        <MenuItem>
                            <Link
                                onClick={handleMobileMenuClose}
                                className={classes.link}
                                to={"/about"}
                            >
                                <Typography
                                    variant="button"
                                    className={classes.mobileMenuItemText}
                                >
                                    about
                                </Typography>
                            </Link>
                        </MenuItem>

                        <MenuItem>
                            <Link
                                onClick={handleMobileMenuClose}
                                className={classes.link}
                                to={"/cart"}
                            >
                                <Typography
                                    variant="button"
                                    className={classes.mobileMenuItemText}
                                >
                                    cart
                                </Typography>
                            </Link>
                        </MenuItem>

                        {state.currentUser !== null ? (
                            <>
                                <MenuItem>
                                    <Link
                                        onClick={handleMobileMenuClose}
                                        className={classes.link}
                                        to={"/account"}
                                    >
                                        <Typography
                                            variant="button"
                                            className={
                                                classes.mobileMenuItemText
                                            }
                                        >
                                            account
                                        </Typography>
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link
                                        onClick={handleMobileMenuClose}
                                        className={classes.link}
                                        to="/"
                                    >
                                        <Typography
                                            variant="button"
                                            color="inherit"
                                            onClick={handleLogout}
                                            className={
                                                classes.mobileMenuItemText
                                            }
                                        >
                                            Logout
                                        </Typography>
                                    </Link>
                                </MenuItem>
                            </>
                        ) : (
                            <MenuItem>
                                <Link
                                    onClick={handleMobileMenuClose}
                                    className={classes.link}
                                    to={{
                                        pathname: "/login",
                                        state: {
                                            prevUrl: window.location.href,
                                        },
                                    }}
                                >
                                    <Typography
                                        variant="button"
                                        color="inherit"
                                        className={classes.mobileMenuItemText}
                                    >
                                        Login
                                    </Typography>
                                </Link>
                            </MenuItem>
                        )}
                    </Menu>
                </AppBar>
            </Mobile>

            {/* TABLET STYLES */}

            <Tablet>
                <Typography variant="h4" className={classes.mobileHeader}>
                    Tablet
                </Typography>
            </Tablet>
        </>
    )
}

export default withRouter(NavBar)
