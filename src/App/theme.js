import { createTheme } from "@mui/material/styles";
import { grey, common } from "@mui/material/colors";

/**
 * Peak Shirt Theme
 *
 * Features:
 * - AppBar is sticky by default
 */
export default createTheme({
  components: {
    MuiAppBar: {
      defaultProps: {
        position: "sticky",
      },
      styleOverrides: {
        root: {
          backgroundColor: common.white,
          color: grey[900],
        },
      },
    },
  },
});
//TODO A tester
