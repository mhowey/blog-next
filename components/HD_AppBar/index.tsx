import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import HD_MenuDrawer from "@root/components/HD_MenuDrawer";

const HD_AppBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME;
  const creatorName = process.env.NEXT_PUBLIC_CREATOR_NAME;
  return (
    <>
      <AppBar>
        <Toolbar>
          <Stack direction="row" alignItems="center">
            <IconButton
              onClick={toggleMenu}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography>{siteName}</Typography>
          </Stack>
          <Box flexGrow={1} />
          <Box>
            <Typography>Creation of {creatorName}</Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <HD_MenuDrawer menuOpen={menuOpen} onClose={toggleMenu} />
    </>
  );
};

export default HD_AppBar;
