import React from "react"
import { UserDataForm } from "../../export"

function EditUserInformation({ user, handleUpdate }) {
    return (
        <UserDataForm
            currentUser={user}
            handleFunctionFromParent={handleUpdate}
            withAuth={{ email: false, password: false }}
            buttonText={"Update Information"}
            headerInformation={{ icon: false, title: false }}
            withConsultMessage={false}
        />
    )
}

export default EditUserInformation
