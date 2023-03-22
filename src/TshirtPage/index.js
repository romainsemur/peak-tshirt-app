import { AddShoppingCart } from "@mui/icons-material";
import { CircularProgress, Paper } from "@mui/material";
import useTshirt from "core/hooks/useTshirt";
import { CtaButton } from "ds/atoms";
import { useParams } from "react-router-dom";
import TshirtCard from "../TshirtCard";

export default function TshirtPage() {
  let { tshirtId: id } = useParams();

  const { isLoading, tshirt } = useTshirt({ id });

  if (isLoading) return <CircularProgress />;

  return (
    <>
      <TshirtCard {...tshirt} />
      <Paper
        elevation={3}
        square
        sx={{ padding: 2, position: "fixed", bottom: 0, width: "100vw" }}
      >
        <CtaButton startIcon={<AddShoppingCart />} fullWidth>
          Add to cart
        </CtaButton>
      </Paper>
    </>
  );
}
