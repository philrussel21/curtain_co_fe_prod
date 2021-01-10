import React, { useState, useEffect } from "react"
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
} from "@material-ui/core"
import useStyles from "./UserDataFormStyles"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
// HELPERS AND SERVICES
import { Link } from "react-router-dom"
import {
    getFirstNameFromFullName,
    getLastNameFromFullName,
    checkIfRequiredUserDataFormFieldsAreEmpty,
} from "../../helpers/userHelpers"

// VARIABLES
const states = ["QLD", "VIC", "NSW", "NT", "ACT", "WA", "SA", "TAS"]
const titles = ["Mr", "Mrs", "Miss", "Ms", "Mx", "Sir", "Dr"]

// SELECT DROPDOWN MENU ITEM
const menuItems = states.map((place) => (
    <MenuItem value={place} key={place}>
        {place}
    </MenuItem>
))

const titleItems = titles.map((title) => (
    <MenuItem value={title} key={title}>
        {title}
    </MenuItem>
))

export default function UserDataForm({
    currentUser,
    handleFunctionFromParent,
    withAuth,
    headerInformation,
    buttonText,
    withConsultMessage,
}) {
    const classes = useStyles()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userData, setUserData] = useState({
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
        setUserData({
            email: "",
            password: "",
            title: "",
            // leave the comma in here as it will break the split function I have on this variable
            fullName: ",",
            phone: "",
            companyName: "",
            address1: "",
            suburb: "",
            state: "",
            postcode: "",
        })
    }

    async function handleSubmitForm(e) {
        e.preventDefault()
        console.log(userData)

        if (checkIfRequiredUserDataFormFieldsAreEmpty(userData)) {
            return alert("Please complete all required fields.")
        }

        let error = await handleFunctionFromParent(userData)
        // if there is not error then clear the fields
        if (!error) clearFields()
    }

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
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            value={userData.email}
                                            onChange={handleTextChange}
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
                                                userData.title
                                                    ? userData.title
                                                    : ""
                                            }
                                            inputProps={{
                                                name: "title",
                                                id: "title",
                                            }}
                                            onChange={handleSelectChange}
                                            value={userData.title}
                                            autoComplete="honorific-prefix"
                                        >
                                            {titleItems}
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
                                        autoFocus
                                        value={firstName}
                                        onChange={handleNameChange}
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
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <FormControl
                                        variant="outlined"
                                        style={{ width: "100%" }}
                                    >
                                        <InputLabel htmlFor="state">
                                            State
                                        </InputLabel>
                                        <Select
                                            label="State"
                                            defaultValue={
                                                userData.state
                                                    ? userData.state
                                                    : ""
                                            }
                                            inputProps={{
                                                name: "state",
                                                id: "state",
                                            }}
                                            onChange={handleSelectChange}
                                            value={userData.state}
                                            autoComplete="address-level1"
                                        >
                                            {menuItems}
                                        </Select>
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
                                    rows={6}
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
