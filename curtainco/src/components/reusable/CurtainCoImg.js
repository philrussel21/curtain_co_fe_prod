import React, { useState, useEffect } from "react"
import { Grid, Typography, useTheme, useMediaQuery } from "@material-ui/core"

function CurtainCoImg({
    imageSrc,
    imgAlt,
    border = false,
    text,
    getBorderRadius,
    getImgHeight,
}) {
    const [imgHeight, setImgHeight] = useState(100)
    const [borderRadius, setBorderRadius] = useState(80)
    const theme = useTheme()
    // const isDesktop = useMediaQuery(theme.breakpoints.up("lg"))
    const isMobile = useMediaQuery(theme.breakpoints.only("xs"))
    useEffect(() => {
        let { innerHeight } = window
        let divideBy = 3
        if (isMobile) divideBy = innerHeight > 750 ? 3.5 : 3
        setImgHeight(innerHeight / divideBy)
        setBorderRadius(innerHeight / 10)
    }, [isMobile])

    useEffect(() => {
        if (typeof getBorderRadius === "function") {
            getBorderRadius(borderRadius)
        }
    }, [getBorderRadius, borderRadius])

    useEffect(() => {
        if (typeof getImgHeight === "function") {
            getImgHeight(imgHeight)
        }
    }, [getImgHeight, imgHeight])

    return (
        <>
            <div style={{ position: "relative" }}>
                <div
                    style={{
                        width: "100%",
                        position: "absolute",
                        height: `${imgHeight}px`,
                        zIndex: 25,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Grid
                        item
                        container
                        justify="center"
                        alignItems="center"
                        style={{
                            width: "87%",
                            height: "85%",
                            border: border ? "2px solid white" : "none",
                            borderRadius: `${borderRadius}px 0 ${borderRadius}px 0`,
                        }}
                    >
                        <Typography
                            variant="h2"
                            style={{
                                color: "white",
                                width: "100%",
                                textAlign: "center",
                            }}
                        >
                            {text}
                        </Typography>
                    </Grid>
                </div>

                <Grid
                    style={{
                        width: "100%",
                        height: `${imgHeight}px`,
                        zIndex: 15,
                        borderRadius: `${borderRadius}px 0 ${borderRadius}px 0`,
                    }}
                    container
                    justify="center"
                    alignItems="center"
                >
                    <Grid
                        style={{
                            width: "100%",
                            height: "100%",
                            backgroundImage: `url(${imageSrc})`,
                            backgroundSize: "cover",
                            borderRadius: `${borderRadius}px 0 ${borderRadius}px 0`,
                        }}
                        item
                        container
                        justify="center"
                        alignItems="center"
                    >
                        <Grid
                            item
                            container
                            justify="center"
                            alignItems="center"
                            style={{
                                position: "absolute",
                                background: "black",
                                opacity: 0.5,
                                width: "100%",
                                height: `${imgHeight}px`,
                                borderRadius: `${borderRadius}px 0 ${borderRadius}px 0`,
                            }}
                        />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default CurtainCoImg
