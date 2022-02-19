import React from "react";
import { makeStyles } from "@mui/styles";
import bgimage from "../../img/loginpage.jpg";

export const useStyles = makeStyles((theme) => ({
  body: {
    width: "100vw",
    height: "100vh",
    minWidth: "100vw",
    minHeight: "100vh",
    backgroundImage: `url(${bgimage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundPosition: "center",
  },

  button: {
    marginTop: "20px",
    marginBottom: "10px",
  },

  formcontainer: {
    marginTop: "20px",
    height: "125px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  hr: {
    width: "20%",
    marginTop: "20px",
  },

  logincontainer: {
    marginTop: "10px",
    width: "400px",
    height: "400px",
    background: "#ebedf0",
    opacity: ".95",
    boxSizing: "border-box",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  somelogo: {
    textAlign: "center",
    fontFamily: ["Lobster", "sans-serif"],

    [theme.breakpoints.up("md")]: {
      width: "100%",
      textAlign: "start",
      left: "0px",

      "& h1": {
        marginLeft: "5%",
      },
      "& p": {
        marginLeft: "20vw",
      },
    },

    "& h1": {
      [theme.breakpoints.down("sm")]: {
        fontSize: "2.5rem",
      },
      fontSize: "3rem",
      color: "red",
      textShadow: "1px 1px black",
      marginTop: "20px",
      marginBottom: 0,
    },
    "& p": {
      color: "black",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.3rem",
      },
      fontSize: "1.5rem",
      textShadow: "1px 1px red",
      marginTop: "5px",
    },

    [theme.breakpoints.up("xl")]: {
      width: "100%",
      textAlign: "start",
      left: "0px",

      "& h1": {
        marginLeft: "15%",
      },
      "& p": {
        marginLeft: "20vw",
      },
    },
  },

  text: {
    textAlign: "center",
  },
  textfield: {
    background: "white",
    borderRadius: "10px",
  },
}));
