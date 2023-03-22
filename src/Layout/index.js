import React from "react";
import {
  AppBar,
  Toolbar,
  Badge,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { ShoppingCart, ShoppingCartOutlined } from "@mui/icons-material";

import { Link, Outlet } from "react-router-dom";
import { useCart } from "core/contexts";

export default function Layout() {
  const [{ isCartEmpty, cartItemsQuantity }] = useCart();

  return (
    <>
      <AppBar>
        <Toolbar>
          <Link to="/">
            <Typography variant="h6" component="h1">
              Peak Shirt
            </Typography>
          </Link>
          {<Box sx={{ flexGrow: 1 }} />}
          <Box sx={{ display: { md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show shopping cart"
              color="inherit"
              LinkComponent={Link}
              to="./cart"
            >
              <Badge badgeContent={cartItemsQuantity} color="primary">
                {isCartEmpty ? <ShoppingCartOutlined /> : <ShoppingCart />}
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
}
