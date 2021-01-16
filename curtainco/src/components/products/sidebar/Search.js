import React from "react"
// STYLES
import { TextField, InputAdornment } from "@material-ui/core"
// ICONS
import SearchIcon from "@material-ui/icons/Search"
function Search({ searchInput, handleChange }) {
    return (
        <TextField
            name="search-product"
            variant="outlined"
            fullWidth
            id="search-product"
            label="Search Name"
            value={searchInput}
            onChange={handleChange}
            style={{ width: "100%" }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
        />
    )
}

export default Search
