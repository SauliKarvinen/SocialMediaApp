import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    minHeight: "100vh",
    paddingLeft: "3%",
    paddingRight: "3%",
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "10%",
      paddingRight: "10%",
    },
  },

  gridContainer: {
    marginTop: "5rem",
    width: "100%",
  },

  backgroundImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  gridBackgroundImage: {
    width: "100%",
    borderRadius: "10px",
    height: "60vh",
    overflow: "hidden",
  },

  showGridNameHeader: {
    position: "-webkit-sticky",
    position: "sticky",
    background: "white",
    paddingTop: "1rem",
    zIndex: 1000,
    top: "4rem",
    opacity: 1,
    transition: "0.3s linear",
    [theme.breakpoints.down("sm")]: {
      top: "3.5rem",
    },
  },

  hideGridNameHeader: {
    position: "-webkit-sticky",
    position: "sticky",
    background: "white",
    paddingTop: "1rem",
    zIndex: 1000,
    top: "4rem",
    opacity: 0,
    transition: "0.3s linear",
    [theme.breakpoints.down("sm")]: {
      top: "3.5rem",
    },
  },

  infoContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
}));
