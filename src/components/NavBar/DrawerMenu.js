import React from "react";
import { useState } from "react";
import { Box, Drawer, IconButton, Tooltip } from "@mui/material";
import { Menu } from "@mui/icons-material/";
import { useStyles } from "./DrawerMenuStyles";
import { NavigationArea } from "../Feed/NavigationArea/NavigationArea";

// Drawer menu for small size screens
export const DrawerMenu = ({ menuitems }) => {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Box>
      <Tooltip title="Menu">
        <Box className={classes.menuicon}>
          <IconButton onClick={() => setOpenMenu(!openMenu)} color="primary">
            <Menu />
          </IconButton>
        </Box>
      </Tooltip>

      <Drawer anchor="right" open={openMenu} onClose={() => setOpenMenu(false)}>
        <NavigationArea menuitems={menuitems} />
      </Drawer>
    </Box>
  );
};
