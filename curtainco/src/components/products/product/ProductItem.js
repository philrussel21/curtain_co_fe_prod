import React from "react"

import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import AddIcon from "@material-ui/icons/Add"
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart"
import useStyles from "../ProductStyles"

import { useCurtainContext } from "../../../config/CurtainCoContext"
import { ACTIONS } from "../../../config/stateReducer"
import { capitalize, setSuccessSnackBar } from "../../../helpers/appHelpers"
import { addItemToCart } from "../../../services/cartServices"
import AddToCartButton from "../../reusable/AddToCartButton"

function ProductItem({ productData }) {
    const classes = useStyles()
    const { dispatch } = useCurtainContext()

    function handleViewClick(event) {
        event.preventDefault()

        dispatch({
            type: ACTIONS.SET_MODAL,
            payload: {
                open: true,
                title: `${capitalize(productData.name)}`,
                message: `${capitalize(productData.description)}`,
                data: productData,
            },
        })
    }

    function handleCartClick(event) {
        event.preventDefault()
        addItemToCart(productData, dispatch)
        // SHOW SNACKBAR
        setSuccessSnackBar(dispatch, "Item was added to the cart")
    }

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.cardMedia}
                image={
                    productData.imgUrl
                        ? productData.imgUrl
                        : productData.imgUrl === undefined
                        ? "./no-image.png"
                        : "./loading.gif"
                }
                title={`${capitalize(productData.name)} Image`}
            />

            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h6" component="h2">
                    {capitalize(productData.name)}
                </Typography>
                <Grid container spacing={1}>
                    <Grid item container justify="space-between">
                        <Typography variant="body2">{`Type: ${productData.category}`}</Typography>
                        <Typography variant="body2">{`$${productData.price}`}</Typography>
                    </Grid>
                </Grid>
            </CardContent>

            <CardActions>
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justify="space-between"
                >
                    <Grid item xs container justify="center">
                        <AddToCartButton
                            icon={true}
                            text="Cart"
                            size="small"
                            handleClick={handleCartClick}
                        />
                    </Grid>
                    <Grid item xs container justify="center">
                        <Button
                            size="small"
                            color="primary"
                            onClick={handleViewClick}
                        >
                            See More
                        </Button>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    )
}

export default ProductItem
