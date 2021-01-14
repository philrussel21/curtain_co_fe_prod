import React, { useEffect, useState } from "react"
// STYLES
import { Container, Grid, useMediaQuery } from "@material-ui/core"
import useStyles from "./ProductStyles"
// COMPONENTS
import ProductList from "./product/ProductList"
import Search from "./sidebar/Search"
import Filter from "./sidebar/Filter"
import Sort from "./sidebar/Sort"
import LoadingSymbol from "../reusable/LoadingSymbol"
// STATE
import { useCurtainContext } from "../../config/CurtainCoContext"
import { ACTIONS } from "../../config/stateReducer"
// HELPERS AND SERVICES
import { sortACTIONS, sortProducts } from "../../helpers/productHelpers"
import { getAllProducts } from "../../services/productServices"

const sortFields = Object.values(sortACTIONS)

function Products() {
    const classes = useStyles()
    const { state, dispatch } = useCurtainContext()
    const [sortBy, setSortBy] = useState(sortACTIONS.NAME_ALPHABETICAL)
    const [searchInput, setSearchInput] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const isMobile = useMediaQuery("(max-width: 600px)")

    const [productsErrorMessage, setProductErrorMessage] = useState(null)
    const [filter, setFilter] = useState({
        fabric: false,
        track: false,
        accessory: false,
    })

    // HANDLE THE STATE CHANGE FOR FILTERING
    const handleFilterChange = (event) => {
        setFilter({ ...filter, [event.target.name]: event.target.checked })
    }

    // HANDLE THE STATE CHANGE FOR FILTERING
    const handleSortByChange = (event) => {
        setSortBy(event.target.value)
    }

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value)
    }

    useEffect(() => {
        getAllProducts()
            .then((resp) => {
                if (resp.status === 200) {
                    console.log("---PRODUCTS---")
                    console.log(resp.data)
                    let sortedProducts = sortProducts(
                        resp.data,
                        sortACTIONS.NAME_ALPHABETICAL
                    )
                    dispatch({
                        type: ACTIONS.SET_ALL_PRODUCTS,
                        payload: sortedProducts,
                    })
                    setIsLoading(false)
                }
            })
            .catch((error) => {
                console.log(error)
                setProductErrorMessage(error)
                setIsLoading(false)
            })
    }, [dispatch])

    return (
        <>
            <Container>
                <Grid container spacing={4}>
                    <Grid
                        item
                        container
                        direction="column"
                        justify="flex-start"
                        alignItems="center"
                        xs={12}
                        sm={3}
                        spacing={1}
                    >
                        <Grid item style={{ width: "100%" }}>
                            <Search
                                searchInput={searchInput}
                                handleChange={handleSearchInputChange}
                            />
                        </Grid>

                        <Grid item style={{ width: "100%" }}>
                            <Sort
                                sortFields={sortFields}
                                sortBy={sortBy}
                                handleChange={handleSortByChange}
                            />
                        </Grid>
                        <Grid item style={{ width: "100%" }}>
                            <Filter
                                filterBy={filter}
                                handleChange={handleFilterChange}
                            />
                        </Grid>
                    </Grid>
                    {/* <Grid item xs={12} sm={9}> */}
                    {/* <Container maxWidth="md"> */}
                    <Grid
                        item
                        container
                        spacing={4}
                        xs={12}
                        sm={8}
                        justify="center"
                        alignItems="center"
                        className={
                            isMobile ? classes.cardGridMobile : classes.cardGrid
                        }
                    >
                        {isLoading ? (
                            <LoadingSymbol />
                        ) : productsErrorMessage !== null ? (
                            productsErrorMessage
                        ) : (
                            <ProductList
                                products={state.products}
                                filterText={searchInput}
                                filterTypes={filter}
                                filterSortBy={sortBy}
                                sortFields={sortFields}
                                inStockOnly={true}
                            />
                        )}
                    </Grid>
                    {/* </Container> */}
                    {/* </Grid> */}
                </Grid>
            </Container>
        </>
    )
}

export default Products
