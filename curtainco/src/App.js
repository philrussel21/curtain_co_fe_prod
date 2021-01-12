import React, { useState, useEffect } from "react"
// STATE
import { useCurtainContext } from "./config/CurtainCoContext"
import { ACTIONS } from "./config/stateReducer"
// STYLES
import { Container } from "@material-ui/core"
import "./styles/Main.css"
// PACKAGES
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
// HELPERS ANS SERVICES
import { getLoggedInUserFromHomeRoute } from "./services/authServices"
// COMPONENTS
import {
    NavBar,
    Home,
    Footer,
    About,
    Collections,
    CollectionCustomise,
    Products,
    Cart,
    Account,
    Login,
    Register,
    RequestConsultation,
    CustomSnackbar,
    CustomModal,
    PageNotFound,
} from "./components/export.js"
import { setErrorSnackBar } from "./helpers/appHelpers"
import LoadingSymbol from "./components/reusable/LoadingSymbol"

function App() {
    const { state, dispatch } = useCurtainContext()
    const [isLoading, setIsLoading] = useState(false)
    const isMobile = useMediaQuery({ maxWidth: 767 })
    useEffect(() => {
        if (state.currentUser === null) {
            setIsLoading(true)
            getLoggedInUserFromHomeRoute()
                .then((resp) => {
                    let currentUser = resp.data.user
                    if (currentUser && resp.status === 200) {
                        dispatch({
                            type: ACTIONS.SET_CURRENT_USER,
                            payload: currentUser,
                        })
                    }
                })
                .catch((error) => {
                    console.log(
                        `An error ocurred on getLoggedInUserFromHomeRoute: ${error}.`
                    )
                    setErrorSnackBar(
                        dispatch,
                        "Something went wrong and we couldn't log you in"
                    )
                })
            setIsLoading(false)
        }
    }, [dispatch, state.currentUser])

    return (
        <Router>
            <NavBar />

            {isLoading ? (
                <LoadingSymbol />
            ) : (
                <Container
                    className={
                        isMobile ? "app-container-mobile" : "app-container"
                    }
                    component="main"
                >
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/about" component={About} />
                        <Route
                            exact
                            path="/collections"
                            component={Collections}
                        />
                        <Route
                            exact
                            path="/collections/customise/:id"
                            component={CollectionCustomise}
                        />
                        <Route exact path="/products" component={Products} />
                        <Route exact path="/cart" component={Cart} />
                        <Route
                            exact
                            path="/request"
                            component={RequestConsultation}
                        />
                        <Route exact path="/account" component={Account} />
                        <Route component={PageNotFound} />
                    </Switch>
                </Container>
            )}

            <CustomSnackbar
                open={state.snackbar.open}
                severity={state.snackbar.severity}
                message={state.snackbar.message}
            />

            <CustomModal
                title={state.modal.title}
                open={state.modal.open}
                message={state.modal.message}
                data={state.modal.data}
            />

            <Footer />
        </Router>
    )
}

export default App
