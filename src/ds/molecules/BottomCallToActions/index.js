import { Divider, Paper } from "@mui/material";
import { node } from "prop-types";

/**
 *
 * @param {*} props
 * @param ReactComponent props.children
 * @param ReactComponent props.secondary
 * @returns ReactComponent
 */
export default function BottomCallToActions({ children, secondary }) {
  return (
    <Paper
      elevation={3}
      square
      sx={{ padding: 2, position: "fixed", bottom: 0, width: "100vw" }}
    >
      {secondary}
      <Divider sx={{ margin: 2 }} />
      {children}
    </Paper>
  );
}

BottomCallToActions.propTypes = {
  children: node,
  secondary: node,
};
