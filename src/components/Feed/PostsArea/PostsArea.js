import React from "react";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Post } from "./Post";
import { useAppContext } from "../../ContextProvider/ContextProvider";

// All posts
export const PostsArea = () => {
  const { updatePosts, posts } = useAppContext();

  // On initial render update posts
  useEffect(() => {
    updatePosts();
  }, []);

  return (
    <Box>
      {posts && posts.map((post, i) => <Post key={i} post={post}></Post>)}
    </Box>
  );
};
