import React from "react"
// STYLES
import { TextField, MenuItem } from "@material-ui/core"
import useStyles from "../ProductStyles"
function Sort({ sortFields, sortBy, handleChange }) {
    const classes = useStyles()
    const sortItems = sortFields.map((field) => (
        <MenuItem value={field} key={field}>
            {field}
        </MenuItem>
    ))

    return (
        <>
            <TextField
                id="sort-by"
                variant="outlined"
                label="Sort"
                value={sortBy}
                select
                onChange={handleChange}
                className={classes.productFilterText}
            >
                {sortItems}
            </TextField>
        </>
    )
}

export default Sort
