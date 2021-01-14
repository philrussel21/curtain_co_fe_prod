import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    homeCont: {
        height: "100%",
        // paddingTop: "100px",
        maxWidth: "1100px",
        margin: "0 auto",
    },
    homeImg: {},
    homeWhyCurtains: {},
    whyCurtainsHeading: {
        fontFamily: theme.typography.fontFamily.split(",")[2],
    },
    whyCurtainsText: {
        fontFamily: theme.typography.fontFamily.split(",")[1],
        fontStyle: "italic",
    },
    whyCurtainsCont: {
        paddingBottom: "1%",
    },
    curtainCoImgText: {
        fontFamily: theme.typography.fontFamily.split(",")[2],
        color: "white",
        width: "100%",
        textAlign: "center",
    },
}))

export default useStyles
