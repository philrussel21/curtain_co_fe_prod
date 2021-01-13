import { IconButton } from "@material-ui/core"
import React from "react"
import { useTheme } from "@material-ui/core"

function SocialLinkButton({ text }) {
    const theme = useTheme()
    return (
        <IconButton
            color="primary"
            size="small"
            style={{
                border: `1px solid ${theme.palette.primary.main}`,
                width: "75%",
            }}
        >
            {text}
        </IconButton>
    )
}

export default SocialLinkButton
