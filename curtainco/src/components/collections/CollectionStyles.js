import { makeStyles, ThemeProvider } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
        width: "60%",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
        borderBottomRightRadius: theme.spacing(10),
        borderTopLeftRadius: theme.spacing(10),
        border: `1px solid ${theme.palette.primary.main}`,
    },
    link: {
        textDecoration: "none",
        color: "inherit",
    },
    collectionListCont: {
        height: "100%",
        paddingBottom: "5%",
    },
    collectionHeaderImage: {
        width: "60%",
    },
    collectionHeaderCont: {
        // width: "100%",
        paddingLeft: "5%",
        // margin: "0 auto",
    },
    collectionList: {
        width: "100%",
    },
    accordionRoot: {
        width: "100%",
    },
    accordionHeading: {
        fontSize: theme.typography.pxToRem(20),
        fontWeight: theme.typography.fontWeightRegular,
    },
    accordionDetails: {
        width: "90%",
        margin: "0 auto",
    },
    accordionDataItemSelected: {
        border: `3px solid ${theme.palette.secondary.light}`,
        padding: "4px",
        cursor: "pointer",
        height: "100px",
        width: "100px",
        objectFit: "cover",
        borderBottomRightRadius: theme.spacing(4),
        borderTopLeftRadius: theme.spacing(4),
        "&:hover": {
            border: `3px solid ${theme.palette.secondary.main}`,
        },
    },
    accordionDataItem: {
        padding: "6px",
        cursor: "pointer",
        height: "100px",
        width: "100px",
        objectFit: "cover",
        borderBottomRightRadius: theme.spacing(4),
        borderTopLeftRadius: theme.spacing(4),
    },
    collectionItemHeader: {
        fontFamily: theme.typography.fontFamily.split(",")[2],
        fontSize: "2.5rem",
        color: theme.palette.primary.light,
    },
    collectionItemImg: {
        width: "90%",
        objectFit: "cover",
        maxWidth: "200px",
        maxHeight: "150px",
        borderBottomRightRadius: theme.spacing(6),
        borderTopLeftRadius: theme.spacing(6),
    },
    collectionItemDescription: {
        fontStyle: "italic",
        fontFamily: theme.typography.fontFamily.split(",")[1],
        color: theme.palette.grey[700],
    },
    collectionItemImgMobile: {
        width: "100%",
        objectFit: "cover",
        maxWidth: "350px",
        maxHeight: "170px",
        borderBottomRightRadius: theme.spacing(6),
        borderTopLeftRadius: theme.spacing(6),
    },
    collectionCustomiseHeader: {
        fontFamily: theme.typography.fontFamily.split(",")[2],
        color: theme.palette.primary.main,
        textAlign: "center",
    },
    designerTipHeader: {
        fontFamily: theme.typography.fontFamily.split(",")[2],
        color: theme.palette.secondary.light,
    },
    designerTipMessage: {
        fontFamily: theme.typography.fontFamily.split(",")[1],
        color: theme.palette.grey[900],
        fontStyle: "italic",
    },
    collectionCustomiseProductName: {
        fontFamily: theme.typography.fontFamily.split(",")[1],
        color: theme.palette.grey[800],
        // fontSize: 14,
    },
    collectionIncludesHeader: {
        fontFamily: theme.typography.fontFamily.split(",")[2],
        color: theme.palette.primary.light,
        textAlign: "center",
    },
    collectionIncludesNumber: {
        fontFamily: theme.typography.fontFamily.split(",")[1],
        color: theme.palette.grey[800],
        fontStyle: "italic",
    },
    collectionIncludesCategoryCont: {
        paddingTop: "5%",
    },
    collectionIncludesTotalHeader: {
        paddingTop: "5%",
    },
    collectionIncludesTotal: {
        fontFamily: theme.typography.fontFamily.split(",")[1],
        fontWeight: "bold",
        fontSize: 20,
    },
    collectionIncludesTotalNumber: {
        fontFamily: theme.typography.fontFamily.split(",")[1],
        fontWeight: "bold",
        fontSize: 20,
    },
    customizedCollectionAccordionCont: {},
}))

export default useStyles
