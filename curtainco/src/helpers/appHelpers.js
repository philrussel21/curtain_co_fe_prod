import { ACTIONS } from "../config/stateReducer"

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function isEmpty(object) {
    return Object.keys(object).length === 0
}

function isPhotoPresent(photo) {
    return photo.size !== undefined
}

function displayShortDate(createdAt) {
    // let newDate = date.substr(0, 10);
    // let newDate = new Date(createdAt);
    let [month, date, year] = new Date(createdAt)
        .toLocaleDateString("en-US")
        .split("/")
    let dateStr = `${date}.${month}.${year}`

    return dateStr
}

function displayPhoneNumber(phone) {
    return `${phone.substring(0, 4)} ${phone.substring(4, 7)} ${phone.substring(
        7,
        10
    )}`
}

function ascSort(data) {
    // sort by date, olders first
    // then sort by processed, showing unprocessed first
    let sorted = data.sort((a, b) => {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(a.createdAt) - new Date(b.createdAt)
    })

    let completedList = []
    let incompleteList = []

    for (let i = 0; i < sorted.length; i++) {
        const element = sorted[i]
        if (element.isProcessed) {
            completedList.push(element)
        } else {
            incompleteList.push(element)
        }
    }

    return [...incompleteList, ...completedList]
}

function setErrorSnackBar(dispatch, error) {
    dispatch({
        type: ACTIONS.SET_SNACKBAR,
        payload: {
            open: true,
            severity: "error",
            message: error,
        },
    })
}

function setSuccessSnackBar(dispatch, message) {
    dispatch({
        type: ACTIONS.SET_SNACKBAR,
        payload: {
            open: true,
            severity: "success",
            message: message,
        },
    })
}

function setWarningSnackBar(dispatch, message) {
    dispatch({
        type: ACTIONS.SET_SNACKBAR,
        payload: {
            open: true,
            severity: "warning",
            message: message,
        },
    })
}

function setSuccessAlert(dispatch, message) {
    dispatch({
        type: ACTIONS.SET_ALERT,
        payload: {
            severity: "success",
            message,
        },
    })
}

function setWarningAlert(dispatch, message) {
    dispatch({
        type: ACTIONS.SET_ALERT,
        payload: {
            severity: "warning",
            message,
        },
    })
}

function setErrorAlert(dispatch, message) {
    dispatch({
        type: ACTIONS.SET_ALERT,
        payload: {
            severity: "error",
            message,
        },
    })
}

export {
    capitalize,
    isEmpty,
    isPhotoPresent,
    displayShortDate,
    displayPhoneNumber,
    ascSort,
    setErrorSnackBar,
    setSuccessSnackBar,
    setWarningSnackBar,
    setSuccessAlert,
    setWarningAlert,
    setErrorAlert,
}
