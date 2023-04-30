import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import HD_MenuDrawer from "@root/components/HD_MenuDrawer";

const HD_AppBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME;
  console.log("siteName==>", siteName);
  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton
            onClick={toggleMenu}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography>{siteName}</Typography>
        </Toolbar>
      </AppBar>
      <HD_MenuDrawer menuOpen={menuOpen} onClose={toggleMenu} />
    </>
  );
};

export default HD_AppBar;
