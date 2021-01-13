import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingBottom: "15%",
        marginLeft: "20%",
        overflowY: "auto",
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderBottomRightRadius: "40px",
        borderTopLeftRadius: "40px",
        border: `1px solid ${theme.palette.primary.main}`,
        paddingBottom: theme.spacing(1),
    },
    cardMedia: {
        paddingTop: "56.25%", // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}))

export default useStyles
