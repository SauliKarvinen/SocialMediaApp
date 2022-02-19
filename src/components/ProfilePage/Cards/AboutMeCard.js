import React from "react";
import { Grid, Box, Card, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useStyles } from "./CardStyles";

// About me card in profile page
export const AboutMeCard = ({ user }) => {
  const theme = useTheme();
  const classes = useStyles();
  const smallscreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Card style={{ padding: smallscreen ? "0rem" : "1rem", marginTop: "2rem" }}>
      {user && (
        <Grid container p={1}>
          <Grid item xs={12}>
            <Box display="flex" flexDirection="column">
              <Typography variant="h5">About Me</Typography>
              <hr width="125px" />
              <Grid
                container
                mt={2}
                style={{ padding: smallscreen ? "0rem" : "1rem" }}
              >
                <Grid item xs={12} md={3}>
                  <Box display="flex" justifyContent="center">
                    <Box
                      style={{
                        width: "10rem",
                        height: "10rem",
                        overflow: "hidden",
                        borderRadius: "50%",
                        border: "1px solid",
                      }}
                    >
                      <img
                        src={user.profileimg}
                        alt="profileimage"
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    height="100%"
                    style={{
                      textAlign: smallscreen ? "center" : "initial",
                      marginTop: smallscreen ? "1.5rem" : "0rem",
                    }}
                  >
                    <Box mb={3}>
                      <Typography variant="h4">{user.name}</Typography>
                      <Typography
                        variant="h6"
                        style={{ color: theme.palette.secondary.main }}
                      >
                        {user.title} at {user.organization}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} mt={3} p={3} className={classes.bioText}>
                  <Typography>{user.bio}</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      )}
    </Card>
  );
};
