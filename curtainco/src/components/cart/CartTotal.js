import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useCurtainContext } from "../../config/CurtainCoContext";
import CustomAlert from "../reusable/CustomAlert";

function CartTotal({ total, children, loginText, isCancel, isError, isCancelOrError, setPaymentFailedOrCancelled }) {
    const { state } = useCurtainContext();
    return (
        <Grid container direction="column" spacing={2}>
            {/* IF PAYMENT WAS CANCELLED OR THERE WAS AN ERROR
            SHOW THIS DIV */}
            {(isCancelOrError) && (

                <Grid item>
                    <Typography>
                        < CustomAlert setPaymentFailedOrCancelled={setPaymentFailedOrCancelled} />
                    </Typography>
                </Grid>
            )}

            <Grid item container justify="center" alignItems="center">
                <Grid item xs container justify="center">
                    <Typography variant="h5" component="h5">
                        Subtotal
                    </Typography>
                </Grid>
                <Grid item xs container justify="center">
                    <Typography variant="h4" component="h4">
                        ${total.toFixed(2)}
                    </Typography>
                </Grid>
            </Grid>

            {state.currentUser === null && (
                <Grid item xs container justify="center">
                    <Typography>{loginText}</Typography>
                </Grid>
            )}
            <Grid item container justify="center" alignItems="center">
                <Grid item xs container justify="center">
                    <Link to="/products" className="link">
                        <Button variant="outlined" color="primary" size="large">
                            Continue Shopping
                        </Button>
                    </Link>
                </Grid>

                <Grid item xs container justify="center" alignItems="center">
                    {children}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default CartTotal;
