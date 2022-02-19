import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  applogo: {
    margin: "0px",
    marginLeft: "10px",

    fontFamily: ["Lobster", "sans-serif"],
    color: "red",
    textShadow: "1px 1px black",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      marginLeft: "10px",
    },
    /* [theme.breakpoints.down("sm")]: {
      fontSize: "1.4rem",
    }, */
  },

  imgcontainer: {
    maxHeight: "40px",
    maxWidth: "40px",
    borderRadius: "50%",
    background: "blue",
    overflow: "hidden",
    boxSizing: "border-box",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },

  profileimage: {
    height: "40px",
    width: "40px",
    objectFit: "cover",
    borderRadius: "50%",
  },

  navlinksbigscreen: {
    marginLeft: "auto",
    marginRight: "75px",
    width: "230px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  navlinkssmallscreen: {
    marginLeft: "auto",
    marginRight: "10px",
    width: "125px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  linktext: {
    "&:hover": {
      transform: "scale(1.05)",
    },
  },

  logouticon: {
    transform: "scale(1.7)",
    "&:hover": {
      transform: "scale(1.85)",
    },
  },
}));
