import React from "react";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    boxSizing: "border-box",

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
}));
