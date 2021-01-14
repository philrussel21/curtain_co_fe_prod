import React from "react"
// STYLES
import {
    FormLabel,
    FormControl,
    FormGroup,
    FormControlLabel,
    Checkbox,
} from "@material-ui/core"
import useStyles from "../ProductStyles"

export default function Filter({ filterBy, handleChange }) {
    const classes = useStyles()
    const { fabric, track, accessory } = filterBy

    return (
        <div className={classes.filterRoot} style={{ width: "100%" }}>
            <FormControl
                component="fieldset"
                className={classes.filterFormControl}
            >
                <FormLabel
                    component="legend"
                    // className={classes.productFilterHeadings}
                >
                    Filter Products
                </FormLabel>
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={fabric}
                                onChange={handleChange}
                                name="fabric"
                            />
                        }
                        label="Fabric"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={track}
                                onChange={handleChange}
                                name="track"
                            />
                        }
                        label="Tracks"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={accessory}
                                onChange={handleChange}
                                name="accessory"
                            />
                        }
                        label="Accessories"
                    />
                    {/* <FormControlLabel
                        control={
                            <Checkbox
                                checked={inStock}
                                onChange={handleChange}
                                name="inStock"
                            />
                        }
                        label="In Stock"
                    /> */}
                </FormGroup>
                {/* <FormHelperText>Some text here?</FormHelperText> */}
            </FormControl>
        </div>
    )
}
