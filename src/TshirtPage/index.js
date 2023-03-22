import { AddShoppingCart } from "@mui/icons-material";
import { CircularProgress, Paper } from "@mui/material";
import { useCart } from "core/contexts";
import useTshirt from "core/hooks/useTshirt";
import { CtaButton } from "ds/atoms";
import { BottomCallToActions } from "ds/molecules";
import { useParams } from "react-router-dom";
import TshirtCard from "../TshirtCard";

export default function TshirtPage() {
  let { tshirtId: id } = useParams();

  const { isLoading, tshirt } = useTshirt({ id });
  const [cart, dispatch] = useCart();
  if (isLoading) return <CircularProgress />;

  return (
    <>
      <TshirtCard {...tshirt} />
      <BottomCallToActions>
        <CtaButton
          startIcon={<AddShoppingCart />}
          fullWidth
          onClick={() => dispatch({ type: "add" })}
        >
          Add to cart
        </CtaButton>
      </BottomCallToActions>
    </>
  );
}
