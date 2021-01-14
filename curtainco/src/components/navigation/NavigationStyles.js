import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    navLinks: {
        color: "black",
        textDecoration: "none",
        width: "100%",
        height: "100%",
        padding: "12px 20px",
        // "&:hover": {
        //     textDecoration: "underline",
        // },
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
    mobileHeader: {},
    footerMobile: {
        height: "fit-content",
        backgroundColor: "lightblue",
        marginTop: "10%",
        paddingBottom: "20%",
        paddingTop: "5%",
        position: "relative",
        width: "100%",
        bottom: 0,
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
        // maxWidth: "200px",
        // maxHeight: "200px",
        position: "relative",
    },
    navBarLogoImg: {
        maxWidth: "170px",
        maxHeight: "170px",
        position: "relative",
        zIndex: 1000,
        left: "-13%",
    },
    navBarToolBar: {
        padding: "none",
    },
    topNavBarDivider: {
        marginTop: "-113px",
        backgroundColor: theme.palette.primary.light,
    },
    bottomNavBarDivider: {
        marginTop: "-65px",
        backgroundColor: theme.palette.primary.light,
    },
    dividerCont: {
        position: "relative",
    },
    navBarText: {
        fontSize: 20,
        color: theme.palette.primary.dark,
        fontWeight: theme.typography.fontWeightBold,
        letterSpacing: "2px",
    },
    footerText: {
        fontFamily: theme.typography.fontFamily.split(",")[1],
        fontSize: 16,
        letterSpacing: "1px",
    },
    footerEmailLink: {
        fontFamily: theme.typography.fontFamily.split(",")[1],
        fontSize: 16,
        letterSpacing: "1px",
        color: theme.palette.secondary.dark,
    },
    navBarMobileHeaderLeft: {
        textAlign: "center",
        padding: "3%",
        fontWeight: theme.typography.fontWeightMedium,
    },
    navBarMobileHeaderRight: {
        textAlign: "center",
        padding: "3%",
        fontWeight: theme.typography.fontWeightMedium,
        color: theme.palette.primary.main,
    },
    privacy: {
        fontFamily: theme.typography.fontFamily.split(",")[1],
        letterSpacing: "1px",
    },
    footerSiteByLinks: {
        textDecoration: "none",
        color: theme.palette.secondary.dark,
    },
}))

export default useStyles
