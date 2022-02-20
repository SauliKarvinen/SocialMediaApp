import React from "react";
import { Grid, Box, Card, Typography } from "@mui/material";
import { Post } from "../../Feed/PostsArea/Post";
import { useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// Posts card in profile page
export const PostsCard = ({ user }) => {
  const theme = useTheme();
  const smallscreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Card
      style={{ padding: smallscreen ? ".2rem" : "1rem", marginTop: "2rem" }}
    >
      {user && (
        <Grid
          container
          mt={5}
          style={{ padding: smallscreen ? "0rem" : "1rem" }}
        >
          <Grid item xs={12}>
            <Box display="flex" flexDirection="column" mb={3} ml={2}>
              <Typography variant="h5">Posts</Typography>
              <hr width="125px" />
            </Box>

            <Box display="flex" flexDirection="column">
              {user.posts.map((post, i) => (
                <Post key={i} post={post} />
              ))}
            </Box>
          </Grid>
        </Grid>
      )}
    </Card>
  );
};
