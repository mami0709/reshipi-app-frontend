import React from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Box } from "@mui/material";

//  検索用ロジック
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(3),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(2, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    //検索ウインドウの幅ここで調整
    padding: theme.spacing(1, 20, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "25ch",
    },
  },
}));

export const SerchInput = () => {
  return (
    <Box sx={{ display: { xs: "none", sm: "block" }, marginLeft: "auto" }}>
      <Search>
        <StyledInputBase
          placeholder="料理名・食材でレシピを探す"
          inputProps={{ "aria-label": "search" }}
          color="primary"
          style={{ backgroundColor: "#FFD3BA", fontWeight: "bold" }}
          sx={{ float: "left" }}
        />
        <SearchIconWrapper>
          <SearchIcon style={{ color: "white" }} />
        </SearchIconWrapper>
      </Search>
    </Box>
  );
};
