import { Typography, SwipeableDrawer, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

const HD_MenuDrawer = ({ menuOpen, onClose }) => {
  return (
    <SwipeableDrawer
      anchor="left"
      onOpen={() => {}}
      open={menuOpen}
      onClose={onClose}
    >
      <Box style={{ justifyContent: "flex-end", display: "flex" }}>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box style={{ padding: "20px", width: "250px" }}>
        <Typography variant="h5">Menu</Typography>
        <Link href="/" onClick={onClose}>
          <Typography>Home</Typography>
        </Link>
        <Link href="/about" onClick={onClose}>
          <Typography>About</Typography>
        </Link>
      </Box>
    </SwipeableDrawer>
  );
};

export default HD_MenuDrawer;
