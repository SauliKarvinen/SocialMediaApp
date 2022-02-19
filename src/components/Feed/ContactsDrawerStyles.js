import React from "react";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  menuicon: {
    border: "1px solid blue",
    borderRadius: "50%",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },

  drawerlist: {
    width: "200px",
    /* position: "relative",
    top: "60px", */
    background: "#fafcfc",
  },
  listitem: {
    color: "#242626",
    fontSize: "1.5rem",
    "&:hover": {
      marginLeft: "5px",
      color: "blue",
    },
  },
  messageicon: {
    position: "fixed",
    top: "4.7rem",
    zIndex: 1000,
    right: "20px",
    [theme.breakpoints.down("sm")]: {
      right: "10px",
      top: "4rem",
      transform: "scale(0.8)",
    },

    "&:hover": {
      transform: "scale(1.05)",
    },
  },
}));
