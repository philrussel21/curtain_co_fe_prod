import { Hidden } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    userDashboardCont: {
        height: "100%",
        paddingBottom: "5%",
    },
    userDashboardSubheading: {
        textAlign: "center",
        fontFamily: theme.typography.fontFamily.split(",")[2],
        color: theme.palette.primary.light,
    },
    purchaseHistoryRoot: {
        width: "100%",
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
    userDashBoardCTAText: {
        color: theme.palette.grey[700],
        textAlign: "center",
    },
    purchaseHistoryErrorMsg: {
        color: theme.palette.grey[700],
    },
    ctaRequestConsultCont: {
        paddingTop: "9%",
    },
    userAccountPurchaseOrderNumberCont: {
        marginLeft: "10%",
    },
    userAccountPurchaseOrderNumber: {
        fontWeight: "bold",
        color: theme.palette.tertiary.dark,

        // marginLeft: "4%",
    },
    userAccountPurchaseOrderDetailsHeader: {
        // color: theme.palette.tertiary.dark,
        fontFamily: theme.typography.fontFamily.split(",")[1],
        color: theme.palette.grey[800],
    },
    // purchaseOrderDivider: {
    //     marginTop: "1.5%",
    // },
    purchaseOrderDetailsData: {
        fontFamily: theme.typography.fontFamily.split(",")[1],
        color: theme.palette.grey[700],
        fontStyle: "italic",
    },
    purchaseOrderDetailsListHeading: {
        fontFamily: theme.typography.fontFamily.split(",")[1],
    },
    userDashboardPurchaseHistoryCont: {
        height: "100%",
        [theme.breakpoints.only("md")]: {
            height: "fit-content",
            paddingTop: theme.spacing(3),
        },
    },
}))

export default useStyles
