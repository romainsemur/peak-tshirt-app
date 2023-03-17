import React from "react";
import {
  AppBar,
  Toolbar,
  Badge,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";

import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="h1">
            Peak Shirt
          </Typography>
          {<Box sx={{ flexGrow: 1 }} />}
          <Box sx={{ display: { md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <AddShoppingCart />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}
