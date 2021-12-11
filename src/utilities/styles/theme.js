import createTheme from "@mui/material/styles/createTheme";
import blue from "@mui/material/colors/blue";
import purple from "@mui/material/colors/purple";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500]
    },
    secondary: {
      main: purple[500]
    }
  }
});

export default theme;
