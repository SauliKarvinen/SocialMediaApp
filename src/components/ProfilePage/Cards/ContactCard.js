import React from "react";
import { Grid, Box, Card, IconButton, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useStyles } from "./CardStyles";
import { useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const ContactCard = ({ user }) => {
  const classes = useStyles();
  const theme = useTheme();
  const smallscreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Card style={{ padding: "1rem", marginTop: "2rem" }}>
      {user && (
        <Grid container p={1}>
          <Grid item xs={12}>
            <Box display="flex" flexDirection="column">
              <Typography variant="h5">Contact</Typography>
              <hr width="125px" />
            </Box>
          </Grid>
          <Grid container mt={4}>
            <Grid item xs={3} className={classes.contactGridCell}>
              <a href={`mailto:${user.name.split(" ")[0]}@user.com`}>
                <IconButton
                  style={{
                    color: theme.palette.primary.main,
                    transform: "scale(2)",
                  }}
                >
                  <EmailIcon />
                </IconButton>
              </a>
            </Grid>
            <Grid item xs={3} className={classes.contactGridCell}>
              <a href={`http://linkedin.com/${user.name}`} target="_blank">
                <IconButton
                  style={{
                    color: theme.palette.primary.main,
                    transform: "scale(2)",
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
              </a>
            </Grid>
            <Grid item xs={3} className={classes.contactGridCell}>
              <a href={`http://instagram.com/${user.name}`} target="_blank">
                <IconButton
                  style={{
                    color: theme.palette.primary.main,
                    transform: "scale(2)",
                  }}
                >
                  <InstagramIcon />
                </IconButton>
              </a>
            </Grid>
            <Grid item xs={3} className={classes.contactGridCell}>
              <a href={`http://facebook.com/${user.name}`} target="_blank">
                <IconButton
                  style={{
                    color: theme.palette.primary.main,
                    transform: "scale(2)",
                  }}
                >
                  <FacebookIcon />
                </IconButton>
              </a>
            </Grid>
          </Grid>
          <Grid item xs={3} className={classes.contactGridCell} mt={1}>
            {!smallscreen && <Typography>Email</Typography>}
          </Grid>
          <Grid item xs={3} className={classes.contactGridCell} mt={1}>
            {!smallscreen && <Typography>LinkedIn</Typography>}
          </Grid>
          <Grid item xs={3} className={classes.contactGridCell} mt={1}>
            {!smallscreen && <Typography>FaceBook</Typography>}
          </Grid>
          <Grid item xs={3} className={classes.contactGridCell} mt={1}>
            {!smallscreen && <Typography>Facebook</Typography>}
          </Grid>
        </Grid>
      )}
    </Card>
  );
};
