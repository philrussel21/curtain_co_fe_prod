import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    consultationCont: {
        margin: "0 auto",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    link: {
        cursor: "pointer",
        textDecoration: "none",
        color: "inherit",
    },
    formControl: {
        minWidth: 120,
    },
}))

export default useStyles
