import {
  AppBar,
  Avatar,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export function Dashboard() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const navigate = useNavigate();

  function HandleOpenMenu(event) {
    setOpenMenu(event.currentTarget);
  }
  function HandleCloseMenu() {
    setOpenMenu(null);
  }
  return (
    <AppBar sx={{ position: "sticky" }} elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h5">Auth site</Typography>
        <Avatar onClick={HandleOpenMenu} sx={{ cursor: "pointer" }} />

        <Menu
          open={Boolean(openMenu)}
          anchorEl={openMenu}
          onClose={HandleCloseMenu}
        >
          <MenuItem onClick={() => navigate("auth/login")}>Login</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
