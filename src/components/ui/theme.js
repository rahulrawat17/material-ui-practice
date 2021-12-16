import { createTheme } from '@material-ui/core/styles';

const arcBlue = "#6ba6ce"
// #0b72b9
const arcOrange = "#ffba60"

export default createTheme({
    palette: {
        common: {
            arcBlue: `${arcBlue}`,
            arcOrange: `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        },
    },
    typography: {
        h2: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "2.5rem",
            // color: `${arcOrange}`
            color: "white",
            lineHeight: 1.5
        },
        // h3: {
        //     fontWeight: "300"
        // },    
        tab: {
            textTransform: "none",
            fontWeight: "700",
            fontSize: "1rem",
        },
        estimate: {
            fontSize: "1rem",
            textTransform: "none",
            color: "white",
            fontFamily: "curssive"
        }

    }
})