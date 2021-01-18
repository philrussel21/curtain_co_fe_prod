import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    aboutMeCont: {
        paddingBottom: "5%",
        paddingTop: "3%",
    },
    aboutMeImg: {
        width: "100%",
        height: "90%",
        maxHeight: "500px",
        maxWidth: "600px",
        objectFit: "cover",
        borderBottomRightRadius: theme.spacing(12),
        borderTopLeftRadius: theme.spacing(12),
    },
    aboutMeMsg: {
        paddingLeft: theme.spacing(5),
        [theme.breakpoints.down("sm")]: {
            paddingLeft: theme.spacing(0),
        },
        fontStyle: "italic",
        color: theme.palette.grey[800],
    },
    aboutMeMsgHeader: {
        paddingLeft: theme.spacing(5),
        paddingBottom: theme.spacing(1),
        [theme.breakpoints.down("sm")]: {
            paddingLeft: theme.spacing(3),
        },
        fontFamily: theme.typography.fontFamily.split(",")[2],
        color: theme.palette.primary.light,
    },
    aboutMeRangeLinks: {
        fontFamily: theme.typography.fontFamily.split(",")[1],
        color: theme.palette.secondary.light,
    },
}))

export default useStyles
