import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    userDashboardCont: {
        height: "100%",
        overflowY: "auto",
        paddingBottom: "10%",
    },
    userDashboardSubheading: {
        textAlign: "center",
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
    },
}))

export default useStyles
