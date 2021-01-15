import React from "react"
// STYLES
import { Grid, Typography } from "@material-ui/core"
import useStyles from "./CartStyles"
// COMPONENTS
import CartItem from "./CartItem"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

function CartList({
    cart,
    handleRemove,
    handleIncreaseQty,
    handleDecreaseQty,
}) {
    const classes = useStyles()
    return (
        <Grid container direction="column" spacing={3}>
            {cart.length !== 0 ? (
                cart.map((item) => (
                    <CartItem
                        itemInCart={item}
                        handleRemove={handleRemove}
                        handleIncreaseQty={handleIncreaseQty}
                        handleDecreaseQty={handleDecreaseQty}
                        key={`cart-item-${item.id}`}
                    />
                ))
            ) : (
                <Grid
                    item
                    container
                    justify="center"
                    alignItems="center"
                    spacing={6}
                >
                    <Grid item container justify="center" alignItems="center">
                        <Typography
                            variant="h6"
                            component="h6"
                            className={classes.noItemsInCart}
                        >
                            You have no items in your cart, head to{" "}
                            <Link to="/products">Products</Link> or{" "}
                            <Link to="/collections">Collections</Link> to check
                            some out.
                        </Typography>
                    </Grid>
                </Grid>
            )}
        </Grid>
    )
}

export default CartList
