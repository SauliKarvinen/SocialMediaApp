import React from "react";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    minWidth: "200px",
  },

  menulist: {},

  listitem: {
    maxWidth: "100%",
    "&:hover": {
      "& h5": {
        marginLeft: "5px",
        color: "blue",
      },
    },
  },
}));
