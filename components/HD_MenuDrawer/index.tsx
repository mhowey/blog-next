import React from "react";
import { Typography, SwipeableDrawer, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import GavelIcon from "@mui/icons-material/Gavel";
import HomeIcon from "@mui/icons-material/Home";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";

type MenuDrawerProps = {
  menuOpen: boolean;
  onClose(): void;
};

const HD_MenuDrawer = ({ menuOpen, onClose }: MenuDrawerProps) => {
  return (
    <SwipeableDrawer
      anchor="left"
      onOpen={() => {}}
      open={menuOpen}
      onClose={onClose}
    >
      <Box className="card" display="flex" justifyContent="flex-end">
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box padding="20px" width="250px">
        <Typography variant="h5">Menu</Typography>
        <Paper sx={{ width: 320, maxWidth: "100%" }}>
          <MenuList>
            <Link href="/" onClick={onClose}>
              <MenuItem>
                <ListItemIcon>
                  <HomeIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Home</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  {/* ⌘X */}
                  --
                </Typography>
              </MenuItem>
            </Link>
            <Link href="/blog" onClick={onClose}>
              <MenuItem>
                <ListItemIcon>
                  <HelpCenterIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Blog</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  --
                </Typography>
              </MenuItem>
            </Link>
            <Link href="/about" onClick={onClose}>
              <MenuItem>
                <ListItemIcon>
                  <HelpCenterIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>About</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  --
                </Typography>
              </MenuItem>
            </Link>
            <Link href="/docs" onClick={onClose}>
              <MenuItem>
                <ListItemIcon>
                  <ContentPaste fontSize="small" />
                </ListItemIcon>
                <ListItemText>Docs</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  {/* ⌘V */}
                  --
                </Typography>
              </MenuItem>
            </Link>
            <Divider />
            <Link href="/terms-of-use" onClick={onClose}>
              <MenuItem>
                <ListItemIcon>
                  <GavelIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Terms of Use</ListItemText>
              </MenuItem>
            </Link>
          </MenuList>
        </Paper>
      </Box>
    </SwipeableDrawer>
  );
};

export default HD_MenuDrawer;
