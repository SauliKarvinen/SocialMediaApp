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

  gridNameHeader: {
    position: "-webkit-sticky",
    position: "sticky",
    top: "4rem",
    background: "white",
    paddingTop: "1rem",
    zIndex: 1000,
  },

  infoContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
}));
