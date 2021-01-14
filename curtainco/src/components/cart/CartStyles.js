import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: "70%",
        borderBottomRightRadius: theme.spacing(5),
        borderTopLeftRadius: theme.spacing(5),
        border: `1px solid ${theme.palette.primary.main}`,
    },
    secondaryIconButton: {
        border: "1px solid red",
    },
    primaryIconButton: {
        border: "1px solid royalBlue",
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
        width: "90%",
    },
    cartItemDetailsCont: {
        paddingLeft: "3%",
    },
    cartListCont: {
        paddingTop: "3%",
    },
}))

export default useStyles
