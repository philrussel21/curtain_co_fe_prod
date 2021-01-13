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
        backgroundColor:
            theme.palette.type === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
    },
    mobileHeader: {
        textAlign: "center",
        padding: "3%",
    },
    footerMobile: {
        height: "fit-content",
        backgroundColor: "lightblue",
        marginTop: "10%",
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
    },
    toolBar: {
        maxWidth: "1600px",
        width: "100%",
        maxHeight: "200px",
        minHeight: "200px",
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
        width: "100px",
        height: "100px",
    },
    navBarLogoImg: {
        width: "100%",
    },
    navBarToolBar: {
        padding: "none",
    },
    topNavBarDivider: {
        marginTop: "3%",
        backgroundColor: "black",
    },
    bottomNavBarDivider: {
        marginTop: "-3%",
        backgroundColor: "black",
    },
    dividerCont: {
        position: "relative",
    },
}))

export default useStyles
