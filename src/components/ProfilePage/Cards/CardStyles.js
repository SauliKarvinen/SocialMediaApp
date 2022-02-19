import React from "react";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  bioText: {
    textAlign: "initial",
    [theme.breakpoints.down("sm")]: {
      textAlign: "justify",
    },
  },
  contactGridCell: {
    display: "flex",
    justifyContent: "center",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  gitHubLink: {
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));
