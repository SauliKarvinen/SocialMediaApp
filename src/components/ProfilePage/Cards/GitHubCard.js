import React from "react";
import { Grid, Box, Card, Typography } from "@mui/material";
import { useStyles } from "./CardStyles";

export const GitHubCard = ({ user }) => {
  const classes = useStyles();
  return (
    <Card style={{ padding: "1rem", marginTop: "2rem" }}>
      {user && (
        <Grid container mt={5} p={1}>
          <Grid item xs={12}>
            <Box display="flex" flexDirection="column">
              <Typography variant="h5">GitHub</Typography>
              <hr width="125px" />
              <a href={`http://www.github.com/${user.name}`} target="_blank">
                <Typography variant="h5" className={classes.gitHubLink} mt={2}>
                  Click to view my GitHub page!
                </Typography>
              </a>
            </Box>
          </Grid>
        </Grid>
      )}
    </Card>
  );
};
