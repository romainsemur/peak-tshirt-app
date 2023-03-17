import React from "react";
import {
  AppBar,
  Toolbar,
  Badge,
  Typography,
  Box,
  IconButton,
  Grid,
  CircularProgress,
  styled,
  alpha,
  InputBase,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { useTshirts } from "core/hooks";

import TshirtCard from "../TshirtCard";
import StyleFilters from "StyleFilters";
import { useStyleFilters } from "core/contexts";

export default function HomePage() {
  const setSearchWord = (searchWord) => {
    console.log(searchWord);
  };
  const [selectedStyles] = useStyleFilters();
  const { isLoading, tshirts } = useTshirts({ styleIds: selectedStyles });

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(2),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <StyleFilters />

          <Grid container spacing={2}>
            {tshirts.map((tshirt) => (
              <Grid item xs={6} key={tshirt.id}>
                <TshirtCard {...tshirt} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </>
  );
}
