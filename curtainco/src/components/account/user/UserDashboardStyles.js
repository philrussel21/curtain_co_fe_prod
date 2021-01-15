import { Hidden } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    userDashboardCont: {
        height: "100%",
        overflowY: "auto",
        paddingBottom: "5%",
        overflowX: "hidden",
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
        // borderBottomRightRadius: theme.spacing(2),
        // borderTopLeftRadius: theme.spacing(2),
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
        color: theme.palette.grey[700],

        // marginLeft: "4%",
    },
    userAccountPurchaseOrderDetailsHeader: {
        color: theme.palette.primary.main,
    },
    // purchaseOrderDivider: {
    //     marginTop: "1.5%",
    // },
    purchaseOrderDetailsData: {
        fontFamily: theme.typography.fontFamily.split("1"),
        color: theme.palette.grey[700],
        fontStyle: "italic",
    },
    purchaseOrderDetailsListHeading: {
        fontFamily: theme.typography.fontFamily.split("1"),
    },
}))

export default useStyles
