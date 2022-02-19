import React from "react";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    height: "100vh",
    paddingLeft: "3%",
    paddingRight: "3%",
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "10%",
      paddingRight: "10%",
    },
  },
  gridContainer: {
    paddingTop: "5rem",
    width: "100%",
  },

  contactCard: {
    "&:hover": {
      transform: "scale(1.01)",
    },
  },

  img: {
    maxHeight: "4rem",
    maxWidth: "4rem",
    borderRadius: "50%",
    objectFit: "cover",
  },

  imgborder: {
    maxHeight: "4rem",
    maxWidth: "4rem",
    borderRadius: "50%",
  },
}));
