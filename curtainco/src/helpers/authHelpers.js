import { capitalize, isEmpty } from "./appHelpers"

function loginFieldAreBad(field, type) {
    if (field === "") {
        return "Field must not be empty"
    }
    if (
        (type === "email" && !field.includes("@")) ||
        (type === "email" && !field.includes("."))
    ) {
        return "Email is badly formatted"
    }

    if (
        (type === "password" && field.length < 6) ||
        (type === "password" && field.length > 32)
    ) {
        return "Password must be between 6 and 32 characters"
    }
    return false
}

function areAnyFieldsInUserDataFormAreEmpty(userDetails) {
    delete userDetails.title
    delete userDetails.companyName

    console.log("here in check")
    console.log({ userDetails })

    let errorObject = {}

    for (const key in userDetails) {
        if (Object.hasOwnProperty.call(userDetails, key)) {
            let wordForErrorMessage = capitalize(key)
            const value = userDetails[key]
            // CHECK IF ANY OF THE FIELDS ARE EMPTY OR UNDEFINED
            if (value === "" || value === undefined) {
                // IF THEY ARE, CAPITALIZE THE NAME FOR THE ERROR MESSAGE
                // AND ALTER CERTAIN WORDS TO DISPLAY BETTER
                switch (wordForErrorMessage) {
                    case "Address1":
                        wordForErrorMessage = "Address"
                        break
                    case "FirstName":
                        wordForErrorMessage = "First Name"
                        break
                    case "LastName":
                        wordForErrorMessage = "Last Name"
                        break
                    default:
                        break
                }
                // FILL THE OBJECT WITH THE NAME OF THE FIELD AND THE ERROR TO DISPLAY FOR IT
                errorObject[key] = `${wordForErrorMessage} must not be empty`
            }

            // // CATCH INCORRECT POSTCODES
            // if (key === "postcode" && value.length !== 4) {
            //     errorObject[key] = `${wordForErrorMessage} must be 4 numbers`
            // }

            // // CATCH PASSWORDS NOT BETWEEN 6 AND 32
            // if (key === "phone" && value.length !== 10) {
            //     errorObject[
            //         key
            //     ] = `Mobil ${wordForErrorMessage} must be 10 numbers`
            // }

            // // CATCH PASSWORDS NOT BETWEEN 6 AND 32
            // if (
            //     (key === "password" && value.length < 6) ||
            //     (key === "password" && value.length > 32)
            // ) {
            //     errorObject[
            //         key
            //     ] = `${wordForErrorMessage} must be between 6 and 32 characters`
            // }
        }
    }

    // IF THE OBJECT IS STILL EMPTY, THEN NO ERRORS WERE FOUND
    if (isEmpty(errorObject)) {
        return false
    }
    // OTHERWISE RETURN THE OBJECT
    return errorObject
}

export { loginFieldAreBad, areAnyFieldsInUserDataFormAreEmpty }
