import React from "react";
import { DrawerMenu } from "./DrawerMenu";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { useStyles } from "./NavBarStyles";
import profileimage from "../../img/keijoprofile.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useAppContext } from "../ContextProvider/ContextProvider";

// NavBar
export const NavBar = ({ menuitems }) => {
  const classes = useStyles();
  const theme = useTheme();
  const smallscreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { loggedInUser } = useAppContext();

  return (
    <Box className={classes.navbar}>
      <AppBar
        style={{ background: theme.palette.background.paper }}
        elevation={2}
      >
        <Toolbar>
          <DrawerMenu menuitems={menuitems} />

          <Link to="/feed">
            <h2 className={classes.applogo}>Social Media App</h2>
          </Link>
          {!smallscreen && (
            <Box className={classes.navlinksbigscreen}>
              <Link to={`/profile/${loggedInUser.name}`}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-around"
                >
                  <Box className={classes.imgcontainer} boxShadow={3} mr={1}>
                    <img
                      src={profileimage}
                      className={classes.profileimage}
                      alt="profileimage"
                    ></img>
                  </Box>
                  {
                    <Typography className={classes.linktext} color="secondary">
                      Profile
                    </Typography>
                  }
                </Box>
              </Link>
              <Link to="/login">
                <Box display="flex" alignItems="center">
                  <Box mr={1}>
                    <IconButton color="primary">
                      <LogoutIcon className={classes.logouticon}></LogoutIcon>
                    </IconButton>
                  </Box>
                  <Typography className={classes.linktext} color="secondary">
                    Log Out
                  </Typography>
                </Box>
              </Link>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
