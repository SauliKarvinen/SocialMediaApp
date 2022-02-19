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

  contactContainer: {
    boxSizing: "border-box",
    marginBottom: ".3rem",
    color: "white",
    cursor: "pointer",
    maxWidth: "15rem",
    "&:hover": {
      transform: "scale(1.02)",
    },
  },

  img: {
    maxHeight: "2rem",
    maxWidth: "2rem",
    borderRadius: "50%",
    objectFit: "cover",
  },

  imgborder: {
    maxHeight: "2rem",
    maxWidth: "2rem",
    borderRadius: "50%",
  },

  input: {
    [`& fieldset`]: {
      borderRadius: "50px",
    },
  },
}));
