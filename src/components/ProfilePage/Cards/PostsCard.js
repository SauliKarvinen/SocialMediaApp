import React from "react";
import { Grid, Box, Card, Typography } from "@mui/material";
import { Post } from "../../Feed/PostsArea/Post";

export const PostsCard = ({ user }) => {
  return (
    <Card style={{ padding: "1rem", marginTop: "2rem" }}>
      {user && (
        <Grid container mt={5} p={1}>
          <Grid item xs={12}>
            <Box display="flex" flexDirection="column" mb={3}>
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
