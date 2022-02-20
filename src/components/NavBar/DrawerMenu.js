import React from "react";
import { useState } from "react";
import { Box, Drawer, IconButton, Tooltip } from "@mui/material";
import { Menu } from "@mui/icons-material/";
import { useStyles } from "./DrawerMenuStyles";
import { NavigationArea } from "../Feed/NavigationArea/NavigationArea";
import { useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// Drawer menu for small size screens
export const DrawerMenu = ({ menuitems }) => {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(false);
  const theme = useTheme();
  const smallscreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box>
      <Tooltip title="Menu">
        <Box className={classes.menuicon}>
          <IconButton onClick={() => setOpenMenu(!openMenu)} color="primary">
            <Menu />
          </IconButton>
        </Box>
      </Tooltip>

      <Drawer
        anchor="left"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        PaperProps={{ style: { marginTop: smallscreen ? "3rem" : "4rem" } }}
      >
        <NavigationArea menuitems={menuitems} />
      </Drawer>
    </Box>
  );
};
