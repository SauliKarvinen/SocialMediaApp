import React from "react";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  contactsarea: {
    display: "flex",
    flexDirection: "column",
  },

  feedcontainer: {
    width: "100%",
    display: "flex",
    marginTop: "56px",
    flexDirection: "column",
    boxSizing: "border-box",
    [theme.breakpoints.down("sm")]: {
      marginTop: "39px",
    },

    [theme.breakpoints.up("xl")]: {
      paddingLeft: "7%",
      paddingRight: "7%",
    },
  },

  feedheadercontainer: {
    position: "fixed",
    background: "white",
    width: "49.5vw",

    paddingTop: "1rem",
    [theme.breakpoints.up("xs")]: {
      width: "74vw",
    },
    [theme.breakpoints.up("lg")]: {
      width: "50vw",
    },
    [theme.breakpoints.up("xl")]: {
      width: "43vw",
    },
    [theme.breakpoints.down("lg")]: {},

    zIndex: 999,
  },

  gridcontainer: {
    minHeight: "100%",
    justifyContent: "space-around",

    [theme.breakpoints.up("lg")]: {
      marginTop: "5rem",
    },
  },

  gridheaders: {},

  hr: {
    width: "100%",
  },

  messageicon: {
    position: "fixed",
    top: "4.7rem",
    "&:hover": {
      transform: "scale(1.05)",
    },
    [theme.breakpoints.down("sm")]: {
      top: "4.2rem",
    },
    right: "20px",
  },

  navigationarea: {
    display: "flex",
    flexDirection: "column",
  },
  postsarea: {
    display: "flex",
    flexDirection: "column",
    padding: "2px",
    marginTop: "1.4rem",
    [theme.breakpoints.down("lg")]: {
      marginTop: "5rem",
    },
  },
}));
