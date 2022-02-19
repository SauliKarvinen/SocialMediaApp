import React from "react";
import { Grid, Box, Card, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";

export const WorkCard = ({ user }) => {
  const theme = useTheme();
  return (
    <Card style={{ padding: "1rem", marginTop: "2rem" }}>
      {user && (
        <Grid container p={1}>
          <Grid item xs={12} mb={2}>
            <Box display="flex" flexDirection="column">
              <Typography variant="h5">Work</Typography>
              <hr width="125px" />
            </Box>
          </Grid>
          <Box display="flex" flexDirection="column" width="100%">
            {user.workhistory.map((item, i) => (
              <Card
                key={i}
                style={{
                  width: "90%",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: theme.palette.secondary.main,
                  marginTop: ".5rem",
                  padding: "1rem",
                }}
              >
                <Grid container>
                  <Grid item xs={8}>
                    <Typography variant="h5">{item.company}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h5">{item.years}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="h6"
                      style={{ color: theme.palette.secondary.main }}
                    >
                      {item.title}
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            ))}
          </Box>
        </Grid>
      )}
    </Card>
  );
};
