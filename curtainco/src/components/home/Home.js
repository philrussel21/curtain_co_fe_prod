import React, { useState } from "react"
// STYLES
import { Grid, useTheme, useMediaQuery, Container } from "@material-ui/core"
// COMPONENTS
import HeroBanner from "./HeroBanner"
import WhyCurtains from "./WhyCurtains"
import { Desktop, Mobile } from "../reusable/Responsive"

function Home() {
    const [imgBorderRadius, setImgBorderRadius] = useState()
    const [imgHeight, setImgHeight] = useState(0)
    const [imgWidth, setImgWidth] = useState(0)

    console.log(imgHeight)
    // const theme = useTheme()
    // const isDesktop = useMediaQuery(theme.breakpoints.up("lg"))

    function getBorderRadius(radius) {
        setImgBorderRadius(radius)
    }
    function getImgHeight(height) {
        let calc = height / 3
        let width = calc * 4
        setImgHeight(height)
        setImgWidth(width)
    }
    return (
        <>
            {/* DESKTOP */}

            <Desktop>
                <Container>
                    <Grid
                        container
                        alignItems="center"
                        style={{
                            height: "100%",
                            paddingTop: "100px",
                            maxWidth: "1100px",
                            margin: "0 auto",
                        }}
                    >
                        <Grid container justify="center" alignItems="center">
                            <Grid
                                item
                                xs={6}
                                container
                                justify="center"
                                alignItems="center"
                                style={{
                                    backgroundColor: "whitesmoke",
                                    borderBottomRightRadius: `${imgBorderRadius}px`,
                                    borderTopLeftRadius: `${imgBorderRadius}px`,
                                    height: "100%",
                                    width: `${imgWidth}px`,
                                    zIndex: 50,
                                    borderRight: "30px solid whitesmoke",
                                    borderBottom: "10px solid whitesmoke",
                                    borderTop: "10px solid whitesmoke",
                                }}
                            >
                                <HeroBanner
                                    getBorderRadius={getBorderRadius}
                                    getImgHeight={getImgHeight}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={6}
                                container
                                justify="center"
                                alignItems="center"
                                style={{
                                    backgroundColor: "lightblue",
                                    position: "relative",
                                    height: `${imgHeight}px`,
                                    width: "150%",
                                    zIndex: 49,
                                    borderBottomRightRadius: `${imgBorderRadius}px`,
                                    paddingLeft: "12%",
                                    marginLeft: "-10%",
                                    paddingRight: "2%",
                                }}
                            >
                                <WhyCurtains />
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Desktop>

            {/* MOBILE */}

            <Mobile>
                <Grid container direction="column">
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        style={{
                            backgroundColor: "whitesmoke",
                            borderBottomRightRadius: `${imgBorderRadius}px`,
                            borderTopLeftRadius: `${imgBorderRadius}px`,
                            height: "100%",
                            width: "100%",
                            zIndex: 50,
                            borderBottom: "20px solid whitesmoke",
                            borderRight: "10px solid whitesmoke",
                            borderLeft: "10px solid whitesmoke",
                        }}
                    >
                        <HeroBanner
                            getBorderRadius={getBorderRadius}
                            getImgHeight={getImgHeight}
                        />
                    </Grid>
                    <Grid
                        item
                        container
                        justify="center"
                        alignItems="center"
                        xs={12}
                        sm={6}
                        style={{
                            backgroundColor: "lightblue",
                            position: "relative",
                            height: "100%",
                            width: "100%",
                            zIndex: 49,
                            marginTop: "-20%",
                            borderBottomRightRadius: `${imgBorderRadius}px`,
                            borderRight: "10px solid whitesmoke",
                            borderLeft: "10px solid whitesmoke",
                            paddingTop: "25%",
                            paddingBottom: "7%",
                            paddingLeft: "5%",
                            paddingRight: "5%",
                        }}
                    >
                        <WhyCurtains />
                    </Grid>
                </Grid>
            </Mobile>
        </>
    )
}

export default Home
