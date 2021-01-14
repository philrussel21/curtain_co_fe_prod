import { makeStyles } from "@material-ui/core/styles"

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
        width: "50%",
        margin: "0 auto",
    },
    collectionList: {
        width: "100%",
    },
    accordionRoot: {
        width: "100%",
    },
    accordionHeading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    accordionDetails: {
        width: "90%",
        margin: "0 auto",
    },
    accordionDataItemSelected: {
        border: "2px solid royalBlue",
        padding: "4px",
        cursor: "pointer",
        height: "100px",
        width: "100px",
        objectFit: "cover",
        borderBottomRightRadius: theme.spacing(4),
        borderTopLeftRadius: theme.spacing(4),
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
}))

export default useStyles
