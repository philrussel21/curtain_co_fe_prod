import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "none",
        zIndex: theme.zIndex.modal,
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: "none",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: "50%",
        maxWidth: "700px",
        minWidth: "500px",
        // borderBottomRightRadius: theme.spacing(5),
        // borderTopLeftRadius: theme.spacing(5),
        outline: "none",
    },
    closeButton: {
        position: "absolute",
        top: "-7%",
        right: "-7%",
        // border: "1px solid red",
    },
    closeButtonCont: {
        position: "relative",
    },
    modalTitle: {
        fontFamily: theme.typography.fontFamily.split(",")[2],
        color: theme.palette.primary.light,
        fontSize: 40,
    },
    modalImage: {
        borderBottomRightRadius: theme.spacing(5),
        borderTopLeftRadius: theme.spacing(5),
        width: "100%",
        height: "100%",
        maxWidth: "350px",
        maxHeight: "300px",
        objectFit: "cover",
    },
    modalData: {
        fontStyle: "italic",
        color: theme.palette.grey[700],
    },
}))

export default useStyles
