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
}));
