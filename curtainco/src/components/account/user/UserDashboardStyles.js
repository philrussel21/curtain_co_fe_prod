import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    userDashboardCont: {
        height: "100%",
        overflowY: "auto",
        paddingBottom: "10%",
    },
    userDashboardSubheading: {
        textAlign: "center",
        fontFamily: theme.typography.fontFamily.split(",")[2],
        color: theme.palette.primary.light,
    },
    purchaseHistoryRoot: {
        width: "100%",
        // maxWidth: "36px",
    },
    textCenter: {
        textAlign: "center",
    },
    link: {
        textDecoration: "none",
        color: "inherit",
    },
    orderImg: {
        height: "100px",
        width: "100px",
        objectFit: "contain",
    },
    profileInfoDetails: {
        fontStyle: "italic",
        color: theme.palette.grey[700],
    },
}))

export default useStyles
