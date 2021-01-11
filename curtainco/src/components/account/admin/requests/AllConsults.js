import React, { useEffect } from "react"
// STYLES
import {
    Checkbox,
    Table,
    TableBody,
    TableRow,
    TableCell,
    TableHead,
    Paper,
    Button,
} from "@material-ui/core"
import useStyles from "../AdminStyles"
// COMPONENTS
import Title from "../../../reusable/Title"
// HELPERS AND SERVICES
import {
    getFirstNameFromFullName,
    getLastNameFromFullName,
} from "../../../../helpers/userHelpers"
// import { sortConsultations } from "../../../../helpers/consultationHelpers"
import {
    displayShortDate,
    setSuccessSnackBar,
} from "../../../../helpers/appHelpers"
import {
    getAllConsultations,
    markConsultationCompleted,
} from "../../../../services/consultationServices"
// STATE
import { useCurtainContext } from "../../../../config/CurtainCoContext"
import { ACTIONS } from "../../../../config/stateReducer"

export default function AllConsults() {
    const classes = useStyles()
    const { state, dispatch } = useCurtainContext()

    useEffect(() => {
        getAllConsultations()
            .then((resp) => {
                if (resp.status === 200) {
                    console.log("---CONSULTATIONS---")
                    console.log(resp.data)
                    dispatch({
                        type: ACTIONS.SET_ALL_CONSULTATIONS,
                        payload: resp.data,
                    })
                } else {
                    console.log(
                        "status code wasn't correct when getting all consultations"
                    )
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }, [dispatch])

    function handleConsultationCheckbox(event) {
        const checked = event.target.checked
        const consultId = event.currentTarget.parentNode.parentNode.id
        markConsultationCompleted(consultId, { isProcessed: checked })
            .then((resp) => {
                console.log("---UPDATED CONSULTATION---")
                console.log(resp.data)
                if (resp.status === 200) {
                    dispatch({
                        type: ACTIONS.UPDATE_CONSULTATION,
                        payload: resp.data,
                    })

                    setSuccessSnackBar(dispatch, "Consult successfully updated")
                }
            })
            .catch((error) => {
                console.log(
                    `Something went wrong when updating the consultation: ${error}`
                )
            })
    }

    function handleMessageButton(event) {
        // event.currentTarget.value = "fullName,message"
        const fullName = event.currentTarget.value.split("/")[0]
        const message = event.currentTarget.value.split("/")[1]
        // prettier-ignore
        const title = `Message from ${getFirstNameFromFullName(fullName)} 
                    ${getLastNameFromFullName(fullName)}.`;
        dispatch({
            type: ACTIONS.SET_MODAL,
            payload: {
                open: true,
                title: title,
                message: message,
                data: {},
            },
        })
    }

    // REMOVE ADMIN ROLE FROM LIST

    const userRow = state.consults.map((cons) => (
        <TableRow key={cons._id} id={cons._id} hover>
            <TableCell>
                <Checkbox
                    color="primary"
                    checked={cons.isProcessed}
                    inputProps={{ "aria-label": "secondary checkbox" }}
                    onClick={handleConsultationCheckbox}
                />
            </TableCell>
            <TableCell
                className={cons.isProcessed ? classes.checkboxSelected : ""}
            >
                {displayShortDate(cons.createdAt)}
            </TableCell>
            <TableCell
                className={cons.isProcessed ? classes.checkboxSelected : ""}
            >
                {`${getFirstNameFromFullName(cons.fullName)} 
                ${getLastNameFromFullName(cons.fullName)}`}
            </TableCell>
            <TableCell
                className={cons.isProcessed ? classes.checkboxSelected : ""}
            >
                {cons.email}
            </TableCell>
            <TableCell
                className={cons.isProcessed ? classes.checkboxSelected : ""}
            >
                {cons.phone}
            </TableCell>
            <TableCell
                className={cons.isProcessed ? classes.checkboxSelected : ""}
            >
                {`${cons.suburb}, ${cons.state}`}
            </TableCell>
            <TableCell>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleMessageButton}
                    value={`${cons.fullName}/${cons.message}`}
                >
                    View
                </Button>
            </TableCell>
        </TableRow>
    ))

    return (
        <Paper className={classes.paper}>
            <Title>All Consultations</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Done</TableCell>
                        <TableCell>Requested On</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Message</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>{userRow}</TableBody>
            </Table>
        </Paper>
    )
}
