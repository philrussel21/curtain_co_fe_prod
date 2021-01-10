import React, { useState } from "react"
// STYLES
import {
    Container,
    Divider,
    Paper,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
} from "@material-ui/core"
import useStyles from "../AdminStyles"
// COMPONENTS
import AddFabric from "./AddFabric"
import AddTrack from "./AddTrack"
import AddAccessory from "./AddAccessory"

function AddProduct() {
    const classes = useStyles()
    const [checkedValue, setCheckedValue] = useState("track")

    const handleChange = (event) => {
        setCheckedValue(event.target.value)
    }

    return (
        <Paper className={classes.paper}>
            <FormControl component="fieldset">
                <FormLabel component="legend">Which Product?</FormLabel>
                <RadioGroup
                    aria-label="add-product"
                    name="add-product"
                    value={checkedValue}
                    onChange={handleChange}
                    row
                >
                    <FormControlLabel
                        value="track"
                        control={<Radio />}
                        label="Tracks"
                    />
                    <FormControlLabel
                        value="fabric"
                        control={<Radio />}
                        label="Fabric"
                    />
                    <FormControlLabel
                        value="accessory"
                        control={<Radio />}
                        label="Accessories"
                    />
                </RadioGroup>
            </FormControl>

            <Divider />

            <Container>
                {checkedValue === "track" ? (
                    <AddTrack />
                ) : checkedValue === "fabric" ? (
                    <AddFabric />
                ) : (
                    <AddAccessory />
                )}
            </Container>
        </Paper>
    )
}

export default AddProduct
