import React, { useState, useEffect, useRef } from "react"
// STYLES
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Grid,
    Typography,
    Container,
    Divider,
    Select,
    FormControl,
    InputLabel,
    MenuItem,
    Box,
    FormHelperText,
} from "@material-ui/core"
import useStyles from "./UserDataFormStyles"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
// HELPERS AND SERVICES
import { Link } from "react-router-dom"
import {
    getFirstNameFromFullName,
    getLastNameFromFullName,
} from "../../helpers/userHelpers"
import { areAnyFieldsInUserDataFormAreEmpty } from "../../helpers/authHelpers"

// VARIABLES
const states = ["QLD", "VIC", "NSW", "NT", "ACT", "WA", "SA", "TAS"]
const titles = ["Mr", "Mrs", "Miss", "Ms", "Mx", "Sir", "Dr"]

// BUILD SELECT MENU ITEMS
function buildStatesMenuItems(states) {
    let menuItems2 = []
    menuItems2.push(
        <MenuItem value="" disabled key="state-menu-item-disabled">
            State
        </MenuItem>
    )
    for (let i = 0; i < states.length; i++) {
        let place = states[i]
        menuItems2.push(
            <MenuItem value={place} key={place}>
                {place}
            </MenuItem>
        )
    }
    return menuItems2
}

function buildTitlesMenuItems(titles) {
    let menuItems2 = []
    menuItems2.push(
        <MenuItem value="" disabled key="title-menu-item-disabled">
            Title
        </MenuItem>
    )
    for (let i = 0; i < titles.length; i++) {
        let title = titles[i]
        menuItems2.push(
            <MenuItem value={title} key={title}>
                {title}
            </MenuItem>
        )
    }
    return menuItems2
}

export default function UserDataForm({
    currentUser,
    handleSubmitFunctionFromParent,
    withAuth,
    headerInformation,
    buttonText,
    withConsultMessage,
}) {
    const classes = useStyles()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [menuItemsStates, setMenuItemsStates] = useState([])
    const [menuItemsTitles, setMenuItemsTitles] = useState([])
    const emptyUserData = useRef({
        email: "",
        password: "",
        title: "",
        // leave the comma in here as it will break the split function I have on this variable
        fullName: `${firstName},${lastName}`,
        phone: "",
        companyName: "",
        address1: "",
        suburb: "",
        state: "",
        postcode: "",
    })
    const [userData, setUserData] = useState(emptyUserData.current)
    // const [helperText, setHelperText] = useState({
    //     email: "",
    //     password: "",
    //     firstName: "",
    //     lastName: "",
    //     phone: "",
    //     address1: "",
    //     suburb: "",
    //     state: "",
    //     postcode: "",
    //     message: "",
    // })
    const [helperText, setHelperText] = useState({})

    useEffect(() => {
        setMenuItemsStates(buildStatesMenuItems(states))
        setMenuItemsTitles(buildTitlesMenuItems(titles))
    }, [])

    useEffect(() => {
        if (currentUser !== null) {
            console.log(currentUser)
            setUserData(currentUser)
            setFirstName(getFirstNameFromFullName(currentUser.fullName))
            setLastName(getLastNameFromFullName(currentUser.fullName))
        }
    }, [currentUser])

    const handleSelectChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        })
    }

    const handleNameChange = (event) => {
        if (event.target.name === "firstName") {
            setFirstName(event.target.value)
            setUserData({
                ...userData,
                fullName: `${event.target.value},${lastName}`,
            })
        } else {
            setLastName(event.target.value)
            setUserData({
                ...userData,
                fullName: `${firstName},${event.target.value}`,
            })
        }
    }

    const handleTextChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        })
    }

    function clearFields() {
        setFirstName("")
        setLastName("")
        setUserData(emptyUserData.current)
    }

    async function handleSubmitForm(e) {
        e.preventDefault()
        console.log(userData)
        let errorOrResp

        let tempUserData = {
            ...userData,
            firstName: firstName,
            lastName: lastName,
        }

        if (withConsultMessage) {
            // DON'T NEED TO ADD isProcessed AS IT IS ADDED BY DEFAULT IN THE SCHEMA
            // AND NEED TO REMOVE PASSWORD AS NOT NEEDED FOR A CONSULT REQUEST
            delete tempUserData.password
            let tempConsultUserData = {
                ...tempUserData,
                message: withConsultMessage.msg,
            }

            console.log({ tempConsultUserData })

            // ERROR HANDLING FOR SUBMITTING A CONSULTATION
            let emptyFields = areAnyFieldsInUserDataFormAreEmpty(
                tempConsultUserData
            )
            if (emptyFields) {
                setHelperText(emptyFields)
                return
            }

            // AFTER CHECKING IF THE FIRST NAME OR LAST NAME FIELDS ARE EMPTY
            // REMOVE THEM FROM THE OBJECT AND JUST LEAVE
            // THIS IS DONE TO DYNAMICALLY SHOW HELPER TEXT FOR THE FIELDS
            delete tempUserData.firstName
            delete tempUserData.lastName

            // SUBMIT OBJECT TO PARENT WHICH WILL SUBMIT TO DATABASE
            errorOrResp = await handleSubmitFunctionFromParent(
                tempConsultUserData
            )
        } else {
            // ERROR HANDLING FOR REGISTERING
            let emptyFields = areAnyFieldsInUserDataFormAreEmpty(tempUserData)
            if (emptyFields) {
                setHelperText(emptyFields)
                return
            }
            // AFTER CHECKING IF THE FIRST NAME OR LAST NAME FIELDS ARE EMPTY
            // REMOVE THEM FROM THE OBJECT AND JUST LEAVE
            // THIS IS DONE TO DYNAMICALLY SHOW HELPER TEXT FOR THE FIELDS
            delete tempUserData.firstName
            delete tempUserData.lastName

            console.log({ tempUserData })

            // SUBMIT OBJECT TO PARENT WHICH WILL SUBMIT TO DATABASE
            errorOrResp = await handleSubmitFunctionFromParent(tempUserData)
        }
        // IF THERE IS NO ERROR, CLEAR FIELDS
        console.log(errorOrResp)
        if (errorOrResp) clearFields()
    }

    // console.log(helperText)
    // console.log(helperText.postcode)

    return (
        <Container component="main" maxWidth="md">
            {/* <CssBaseline /> */}

            <div className={classes.paper}>
                {headerInformation.icon && (
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                )}

                {headerInformation.title && (
                    <Typography component="h2" variant="h5">
                        {headerInformation.title}
                    </Typography>
                )}

                <form
                    className={classes.form}
                    noValidate
                    onSubmit={handleSubmitForm}
                >
                    <Grid container spacing={2}>
                        {currentUser === null ||
                        (currentUser && !withConsultMessage) ? (
                            <>
                                {withAuth.email && (
                                    <Grid
                                        item
                                        xs={12}
                                        sm={withConsultMessage ? 12 : 6}
                                    >
                                        <TextField
                                            variant="outlined"
                                            autoFocus
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            value={userData.email}
                                            onChange={handleTextChange}
                                            error={
                                                helperText.email !== undefined
                                            }
                                            helperText={helperText.email}
                                        />
                                    </Grid>
                                )}

                                {withAuth.password && (
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                            value={userData.password}
                                            onChange={handleTextChange}
                                            error={
                                                helperText.password !==
                                                undefined
                                            }
                                            helperText={helperText.password}
                                        />
                                    </Grid>
                                )}

                                <Grid item xs={12} sm={2}>
                                    <FormControl
                                        variant="outlined"
                                        style={{ width: "100%" }}
                                    >
                                        <InputLabel htmlFor="title">
                                            Title
                                        </InputLabel>
                                        <Select
                                            label="Title"
                                            defaultValue={
                                                userData.title === undefined
                                                    ? ""
                                                    : userData.title
                                            }
                                            inputProps={{
                                                name: "title",
                                                id: "title",
                                            }}
                                            onChange={handleSelectChange}
                                            value={userData.title}
                                            autoComplete="honorific-prefix"
                                        >
                                            {menuItemsTitles}
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} sm={5}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        value={firstName}
                                        onChange={handleNameChange}
                                        error={
                                            helperText.firstName !== undefined
                                        }
                                        helperText={helperText.firstName}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={5}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="family-name"
                                        value={lastName}
                                        onChange={handleNameChange}
                                        error={
                                            helperText.lastName !== undefined
                                        }
                                        helperText={helperText.lastName}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Box p={1}>
                                        <Divider />
                                    </Box>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="phone"
                                        label="Mobile Number"
                                        type="text"
                                        id="phone"
                                        autoComplete="tel"
                                        value={userData.phone}
                                        onChange={handleTextChange}
                                        error={helperText.phone !== undefined}
                                        helperText={helperText.phone}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        name="companyName"
                                        label="Company"
                                        type="text"
                                        id="companyName"
                                        autoComplete="organization"
                                        value={userData.companyName}
                                        onChange={handleTextChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="address1"
                                        label="Street Address"
                                        type="text"
                                        id="address1"
                                        autoComplete="address-line1"
                                        value={userData.address1}
                                        onChange={handleTextChange}
                                        error={
                                            helperText.address1 !== undefined
                                        }
                                        helperText={helperText.address1}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="suburb"
                                        label="Suburb"
                                        type="text"
                                        id="suburb"
                                        autoComplete="address-level2"
                                        value={userData.suburb}
                                        onChange={handleTextChange}
                                        error={helperText.suburb !== undefined}
                                        helperText={helperText.suburb}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <FormControl
                                        variant="outlined"
                                        style={{ width: "100%" }}
                                        error={helperText.state !== undefined}
                                        required
                                    >
                                        <InputLabel htmlFor="state">
                                            State
                                        </InputLabel>
                                        <Select
                                            label="State"
                                            defaultValue={
                                                userData.state === undefined
                                                    ? ""
                                                    : userData.state
                                            }
                                            inputProps={{
                                                name: "state",
                                                id: "state",
                                            }}
                                            onChange={handleSelectChange}
                                            value={userData.state}
                                            autoComplete="address-level1"
                                        >
                                            {menuItemsStates}
                                        </Select>
                                        <FormHelperText>
                                            {helperText.state}
                                        </FormHelperText>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="postcode"
                                        label="Post Code"
                                        type="text"
                                        id="postcode"
                                        autoComplete="postal-code"
                                        value={userData.postcode}
                                        onChange={handleTextChange}
                                        error={
                                            helperText.postcode !== undefined
                                        }
                                        helperText={helperText.postcode}
                                    />
                                </Grid>
                            </>
                        ) : (
                            ""
                        )}

                        {withConsultMessage && (
                            <Grid item xs={12}>
                                <TextField
                                    id="message"
                                    variant="outlined"
                                    label="Message Details"
                                    value={withConsultMessage.msg}
                                    required
                                    onChange={withConsultMessage.handleFunction}
                                    fullWidth
                                    multiline
                                    rows={5}
                                    error={helperText.message !== undefined}
                                    helperText={helperText.message}
                                />
                            </Grid>
                        )}
                    </Grid>
                    <Container maxWidth="sm">
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            {buttonText}
                        </Button>
                    </Container>

                    {withAuth.email && withAuth.password && (
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link className={classes.link} to="/login">
                                    Already have an account? Sign In
                                </Link>
                            </Grid>
                        </Grid>
                    )}
                </form>
            </div>
        </Container>
    )
}
