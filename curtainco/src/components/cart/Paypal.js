import React from "react";
import ReactDOM from "react-dom";


function Paypal(props) {

    const { handleSuccess, handleError, handleCancel, handleCreateOrder, totalPrice } = props;

    const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

    const payPalButtonStyles = {
        size: "medium",
        color: "blue",
        shape: "pill"
    };
    async function createOrder(data, actions) {
        try {
            await handleCreateOrder();
            return actions.order.create({
                purchase_units: [
                    {
                        amount: {
                            value: totalPrice,
                        },
                    },
                ],
            });
        } catch (error) {
            console.log("There was an error processing the order");
            console.log(error);
        }
    };

    const onApprove = (data, actions) => {
        return actions.order.capture().then((res) => {
            handleSuccess(res);
        });
    };

    const onError = (err) => {
        handleError(err);
    };

    const onCancel = (data) => {
        handleCancel(data);
    };

    return (
        <PayPalButton
            env='sandbox'
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
            onCancel={(data) => onCancel(data)}
            onError={err => onError(err)}
            style={payPalButtonStyles}
        />
    );
}

export default Paypal;