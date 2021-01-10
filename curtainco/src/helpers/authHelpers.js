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
            const value = userDetails[key]
            // CHECK IF ANY OF THE FIELDS ARE EMPTY OR UNDEFINED
            if (value === "" || value === undefined) {
                // IF THEY ARE, CAPITALIZE THE NAME FOR THE ERROR MESSAGE
                // AND ALTER CERTAIN WORDS TO DISPLAY BETTER
                let wordForErrorMessage = capitalize(key)
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
