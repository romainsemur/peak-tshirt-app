import { AddShoppingCart } from "@mui/icons-material";
import { Button, CircularProgress, Paper } from "@mui/material";
import useTshirt from "core/hooks/useTshirt";
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
        <Button
          variant="contained"
          color="success"
          size="large"
          fullWidth
          startIcon={<AddShoppingCart />}
        >
          Add to cart
        </Button>
      </Paper>
    </>
  );
}
