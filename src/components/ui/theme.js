import { createTheme } from '@material-ui/core/styles';

const arcBlue = "#6ba6ce"
// #0b72b9
const arcOrange = "#ffba60"

const theme = createTheme();

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
        h4: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "1.75rem",
            // color: `${arcOrange}`
            color: "blue",
            // lineHeight: 1.5,
            [theme.breakpoints.down("md")]: {
                fontSize: "1.5rem",
            },
            [theme.breakpoints.down("xs")]: {
                fontSize: "1.25rem",
            }
        },
        subtitle1: {
            [theme.breakpoints.down("md")]: {
                fontSize: "1rem",
            },
            [theme.breakpoints.down("xs")]: {
                fontSize: "0.75rem",
            }
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