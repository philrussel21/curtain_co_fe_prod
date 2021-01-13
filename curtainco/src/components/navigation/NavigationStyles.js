import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    link: {
        color: "black",
        textDecoration: "none",
        width: "100%",
        height: "100%",
        padding: "12px 20px",
        "&:hover": {
            textDecoration: "underline",
        },
    },
    iconButtonLink: {
        textDecoration: "none",
        padding: 0,
        width: "70%",
        textAlign: "center",
    },
    footerRoot: {
        position: "absolute",
        bottom: 0,
        height: "fit-content",
        width: "100%",
        zIndex: "100",
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: "auto",
        backgroundColor: "lightblue",
    },
    mobileHeader: {
        textAlign: "center",
        padding: "3%",
    },
    footerMobile: {
        height: "fit-content",
        backgroundColor: "lightblue",
        marginTop: "10%",
        paddingBottom: "5%",
        paddingTop: "5%",
    },
    footerDetailsCont: {
        width: "80%",
        margin: "0 auto",
    },
    mobileMenuItemText: {
        color: "#F2511B",
        // fontFamily: "Roboto Slab",
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    appBar: {
        boxShadow: theme.shadows[0],
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        marginTop: "10px",
    },
    appBarMobile: {
        top: "auto",
        background: "transparent",
        boxShadow: "none",
        marginTop: "3%",
        [theme.breakpoints.down("sm")]: {
            marginTop: "0",
            bottom: "3%",
            width: "25%",
        },
        zIndex: 1000,
    },
    toolBar: {
        maxWidth: "1600px",
        width: "100%",
        maxHeight: "170px",
        minHeight: "170px",
        margin: "0 auto",
    },
    myAccountButton: {
        display: "flex",
        justifyContent: "space-around",
        color: "black",
        textDecoration: "none",
        width: "100%",
        height: "100%",
    },
    navBarLogoCont: {
        width: "150px",
        height: "150px",
        position: "relative",
    },
    navBarLogoImg: {
        width: "130%",
        position: "relative",
        zIndex: 1000,
    },
    navBarToolBar: {
        padding: "none",
    },
    topNavBarDivider: {
        marginTop: "4%",
        backgroundColor: "black",
    },
    bottomNavBarDivider: {
        marginTop: "-4%",
        backgroundColor: "black",
    },
    dividerCont: {
        position: "relative",
    },
}))

export default useStyles
