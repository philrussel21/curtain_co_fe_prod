// STYLES
import { useMediaQuery, useTheme } from "@material-ui/core"

const Desktop = ({ children }) => {
    const theme = useTheme()
    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"))
    // console.log({ isDesktop })
    return isDesktop ? children : null
}

// const Tablet = ({ children }) => {
//     const theme = useTheme()
//     const tabletMinWidth = useMediaQuery(theme.breakpoints.up("sm"))
//     const tabletMaxWidth = useMediaQuery(theme.breakpoints.down("md"))
//     // console.log({ tabletMinWidth })
//     // console.log({ tabletMaxWidth })
//     return tabletMinWidth && tabletMaxWidth ? children : null
// }

// const Mobile = ({ children }) => {
//     const theme = useTheme()
//     // const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
//     const isMobile = useMediaQuery(theme.breakpoints.only("xs"))
//     // console.log({ isMobile })
//     return isMobile ? children : null
// }

// const Default = ({ children }) => {
//     const theme = useTheme()
//     const isNotMobile = useMediaQuery(theme.breakpoints.up("sm"))
//     return isNotMobile ? children : null
// }

const MobileAndTabletPortrait = ({ children }) => {
    const theme = useTheme()
    const tabletMaxWidth = useMediaQuery(theme.breakpoints.down("sm"))
    // console.log({ tabletMinWidth })
    // console.log({ tabletMaxWidth })
    return tabletMaxWidth ? children : null
}

const DesktopAndTabletLandscape = ({ children }) => {
    const theme = useTheme()
    const tabletLandscape = useMediaQuery(theme.breakpoints.up("md"))
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"))
    console.log({ isDesktop })
    console.log({ tabletLandscape })
    // return tabletLandscape && isDesktop ? children : null
    return isDesktop ? children : null
}
export {
    Desktop,
    // Tablet,
    // Mobile,
    // Default,
    MobileAndTabletPortrait,
    DesktopAndTabletLandscape,
}
