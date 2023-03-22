import { Button } from "@mui/material";

/**
 *
 * @example
 * import {CtaButton} from "ds/atoms";
 * <CtaButton startIcon={<AddShoppingCart /} fullWidth>Add to cart</CtaButton>
 */
export default function CtaButton({ children, fullWidth, startIcon }) {
  return (
    <Button
      variant="contained"
      color="success"
      size="large"
      fullWidth={fullWidth}
      startIcon={startIcon}
    >
      {children}
    </Button>
  );
}
