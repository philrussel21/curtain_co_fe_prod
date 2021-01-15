import React from "react"
// STYLES
import { Grid } from "@material-ui/core"
// COMPONENTS
import PurchasedCollection from "./PurchasedCollection"
import PurchasedProduct from "./PurchasedProduct"

function PurchasedItems({ orderItem }) {
    let tempData = orderItem.item

    return (
        <Grid item>
            {orderItem.item.fabric ? (
                <PurchasedCollection
                    qty={orderItem.qty}
                    collection={tempData}
                />
            ) : (
                <PurchasedProduct qty={orderItem.qty} product={tempData} />
            )}
        </Grid>
    )
}

export default PurchasedItems
