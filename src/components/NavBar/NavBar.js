import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Avatar,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, position: "relative" }}>
          {/* Add your logo text or component here */}
          My Logo
        </Typography>
        <div style={{ flexGrow: 1 }} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            left: "50%",
            transform: "translate(-50%)",
          }}
        >
          <IconButton>
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search..."
            style={{ width: "200px", color: "inherit" }}
          />
        </div>
        <Avatar sx={{ ml: 2 }} />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
