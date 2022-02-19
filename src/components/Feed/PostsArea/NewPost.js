import React from "react";
import { useState, useRef } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Grid,
  Paper,
  Tooltip,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useStyles } from "./NewPostStyles";
import { Post as NewUserPost } from "../../ContextProvider/Post";
import { useAppContext } from "../../ContextProvider/ContextProvider";

// New Post popup window
export const NewPost = ({ newPost, showWindow }) => {
  const classes = useStyles();
  const { loggedInUser, updatePosts } = useAppContext();
  const [picture, setPicture] = useState(null);
  const [pictureLoaded, setPictureLoaded] = useState(false);
  const fileInputRef = useRef();

  // for future use
  /* const addPicture = () => {
    setPicture(true);
  }; */
  const [postData, setPostData] = useState({
    picture: null,
    postText: "",
  });

  // For future use
  /* const [toggle, setToggle] = useState(false); */

  // file input ref
  const refFileInput = () => {
    fileInputRef.current.click();
  };

  // Picture upload handler
  const handlePictureUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPicture(event.target.result);
        setPictureLoaded(true);
        setPostData({ ...postData, picture: e.target.files[0] });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // Remove picture
  const removePicture = () => {
    setPicture(false);
    fileInputRef.current.value = null;
    setPictureLoaded(false);
  };

  // upload post
  const uploadPost = () => {
    const start = Date.now();
    const date = new Date(start);

    const newpost = new NewUserPost({
      user: loggedInUser,
      postimg: picture,
      time: date.toDateString(),
      exacttime: start,
      text: postData.postText,
      comments: [],
    });

    loggedInUser.addPost(newpost);
    updatePosts();
    showWindow(false);
  };

  const handlePostText = (e) => {
    // Handle possible hashtags
    /* const reg = /#[a-zA-ZäÄöÖ]+/g;
    const hashtags = postData.postText.match(reg); */

    setPostData({ ...postData, postText: e.target.value });
  };

  return (
    <Paper className={classes.container} elevation={2}>
      <Box display="flex" flexDirection="column">
        <Typography
          variant="h5"
          mb={3}
          mt={1}
          style={{ textDecoration: "underline" }}
        >
          New Post
        </Typography>
        <Box
          style={{ margin: "auto", minWidth: "90%" }}
          display="flex"
          flexDirection="column"
        >
          {picture && (
            <Box className={classes.imagecontainer}>
              <Tooltip title="Remove picture">
                <IconButton
                  style={{
                    width: "1rem",
                    height: "1rem",
                    alignSelf: "center",
                    opacity: pictureLoaded ? 1 : 0,
                  }}
                  color="primary"
                  onClick={removePicture}
                >
                  <HighlightOffIcon style={{ borderRadius: "50%" }} />
                </IconButton>
              </Tooltip>
              <img className={classes.image} src={picture} alt="pic" />
            </Box>
          )}
          <TextField
            boxshadow={1}
            fullWidth
            rows={6}
            placeholder="What's on your mind?"
            multiline
            onChange={handlePostText}
          ></TextField>
          <Box mt={1}>
            <input
              ref={fileInputRef}
              type="file"
              style={{ display: "none" }}
              onChange={handlePictureUpload}
            />
            <Grid container spacing={1} justifyContent="center">
              <Grid item>
                <Button size="small" variant="outlined" onClick={refFileInput}>
                  Add picture
                </Button>
              </Grid>
              <Grid item>
                <Button
                  boxshadow={1}
                  size="small"
                  variant="outlined"
                  onClick={uploadPost}
                >
                  Upload post
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};
