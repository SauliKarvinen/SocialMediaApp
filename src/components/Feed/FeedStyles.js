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
    background: "white",
    width: "49.5vw",
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
    marginTop: ".5rem",
  },

  gridheaders: {
    position: "sticky",
    background: "white",
    zIndex: 999,
    paddingTop: ".5rem",
    top: "4rem",
  },

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
  },

  smallscreenHeader: {
    position: "sticky",
    background: "white",
    top: "3rem",
    paddingTop: "1rem",
  },
}));
