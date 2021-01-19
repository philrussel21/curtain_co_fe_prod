import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    cartItemCont: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: "80%",
        borderBottomRightRadius: theme.spacing(5),
        borderTopLeftRadius: theme.spacing(5),
        border: `1px solid ${theme.palette.primary.main}`,
    },
    secondaryIconButton: {
        border: "1px solid red",
    },
    primaryIconButton: {
        border: `1px solid ${theme.palette.secondary.dark}`,
    },
    cartItemImg: {
        height: "90%",
        width: "100%",
        maxWidth: "200px",
        maxHeight: "150px",
        objectFit: "cover",
        borderBottomRightRadius: theme.spacing(4),
        borderTopLeftRadius: theme.spacing(4),
    },
    cartItemPrice: {
        fontWeight: theme.typography.fontWeightMedium,
        fontStyle: "italic",
        fontSize: theme.typography.pxToRem(20),
    },
    cartTotalCont: {
        width: "100%",
        height: "100%",
    },
    cartItemDetailsCont: {
        paddingLeft: "3%",
    },
    cartListCont: {
        paddingTop: "5%",
    },
    cartItemHeader: {
        color: theme.palette.primary.light,
        fontFamily: theme.typography.fontFamily.split(",")[2],
        fontSize: 40,
        [theme.breakpoints.only("xs")]: {
            fontSize: 30,
        },
    },
    cartItemDetailsData: {
        fontFamily: theme.typography.fontFamily.split(",")[1],
        color: theme.palette.grey[700],
        fontStyle: "italic",
    },
    cartItemDetails: {
        fontFamily: theme.typography.fontFamily.split(",")[1],
    },
    cartItemQtyCont: {
        paddingTop: theme.spacing(2),
    },
    cartItemPriceCont: {
        paddingTop: theme.spacing(2),
    },
    noItemsInCart: {
        fontFamily: theme.typography.fontFamily.split(",")[1],
        fontSize: theme.typography.pxToRem(26),
    },
    noItemsInCartLinks: {
        color: theme.palette.tertiary.dark,
        textDecoration: "none",
        "&:hover": {
            color: theme.palette.tertiary.main,
        },
    },
    payPalLoadingUserMessage: {
        textAlign: "center",
        fontFamily: theme.typography.fontFamily.split(",")[2],
        color: theme.palette.primary.light,
        fontSize: 40,
        [theme.breakpoints.only("xs")]: {
            fontSize: 30,
        },
    },
    cartCollectionContainsHeader: {
        fontFamily: theme.typography.fontFamily.split(",")[1],
        color: theme.palette.grey[800],
        fontWeight: theme.typography.fontWeightBold,
    },
}))

export default useStyles
