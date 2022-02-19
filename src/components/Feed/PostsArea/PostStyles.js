import React from "react";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  postText: {
    padding: "0rem",
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
    },
  },
}));
