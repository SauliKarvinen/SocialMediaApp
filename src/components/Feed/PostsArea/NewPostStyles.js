import React from "react";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    position: "fixed",
    background: theme.palette.background.paper,
    textAlign: "center",
    border: "1px solid",
    padding: "1rem",
    zindex: 9999,
    left: "50%",
    top: "4rem",
    transform: "translate(-50%)",
    /* minHeight: "70vh", */
    [theme.breakpoints.up("xs")]: {
      width: "95vw",
    },
    [theme.breakpoints.up("sm")]: {
      width: "70vw",
    },
    [theme.breakpoints.up("md")]: {
      width: "45vw",
    },
    [theme.breakpoints.up("lg")]: {
      width: "40vw",
    },
  },
  imagecontainer: {
    marginBottom: "2rem",
    minWidth: "80%",
    display: "flex",
    flexDirection: "column",
  },

  image: {
    maxWidth: "100%",
    maxHeight: "20rem",
    objectFit: "contain",
  },
}));
