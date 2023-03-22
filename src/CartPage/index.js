import { Delete, ShoppingCartCheckout } from "@mui/icons-material";
import {
  Avatar,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { CtaButton } from "ds/atoms";
import { BottomCallToActions } from "ds/molecules";
import { Price } from "ds/atoms";
import { number } from "prop-types";
import { useCart } from "core/contexts";

const TotalPrice = ({ price }) => (
  <Typography>
    <strong>Total price:</strong> <Price value={price} />
  </Typography>
);

TotalPrice.propTypes = {
  price: number,
};

export default function CartPage() {
  const [{ cart, isCartEmpty }, { removeFromCart, purchaseCart }] = useCart();

  if (isCartEmpty) return <Typography>Go Shopping !</Typography>;

  return (
    <>
      <List>
        {cart.map(({ id, price, name, quantity, imageUrl }) => (
          <ListItem
            key={id}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={removeFromCart(id)}
              >
                <Delete />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src={`images/${imageUrl}`} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Grid container>
                  <Grid item>
                    <Typography>{name}</Typography>
                  </Grid>
                  {quantity > 1 && (
                    <Grid item sx={{ marginLeft: 1 }}>
                      <Typography variant="caption">(x{quantity})</Typography>
                    </Grid>
                  )}
                </Grid>
              }
              secondary={<Price value={price} />}
            />
          </ListItem>
        ))}
      </List>
      <BottomCallToActions secondary={<TotalPrice price={123.45} />}>
        <CtaButton
          startIcon={<ShoppingCartCheckout />}
          fullWidth
          onClick={purchaseCart}
        >
          Purchase
        </CtaButton>
      </BottomCallToActions>
    </>
  );
}
