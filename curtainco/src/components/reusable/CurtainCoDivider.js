import React from "react"
// STYLES
import { Grid, Divider } from "@material-ui/core"

function CurtainCoDivider() {
    return (
        <Grid container direction="row" spacing={1}>
            <Grid item xs={11}>
                <Divider style={{ background: "grey" }} />
            </Grid>
            <Grid item container alignItems="flex-start" xs={1}>
                <div
                    style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "2px",
                        background: "grey",
                    }}
                />
            </Grid>
        </Grid>
    )
}

export default CurtainCoDivider
