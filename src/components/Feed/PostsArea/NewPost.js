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
export const NewPost = ({ newPost, showWindow }) => {
  const classes = useStyles();
  const { loggedInUser, updatePosts } = useAppContext();
  const [picture, setPicture] = useState(null);
  const [pictureLoaded, setPictureLoaded] = useState(false);
  const fileInputRef = useRef();
  const addPicture = () => {
    setPicture(true);
  };
  const [postData, setPostData] = useState({
    picture: null,
    postText: "",
  });

  const [toggle, setToggle] = useState(false);

  const refFileInput = () => {
    fileInputRef.current.click();
    console.log("ref:", fileInputRef.current);
  };

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

  const removePicture = () => {
    setPicture(false);
    fileInputRef.current.value = null;
    setPictureLoaded(false);
  };

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

    /* 
    
    matti.addPost({
  user: matti,
  postimg: mattipost,
  time: d.toDateString(),
  text: "Pariatur eiusmod excepteur in deserunt sunt ipsum Lorem est labore esse incididunt officia sunt qui. Minim anim est veniam pariatur do aliqua deserunt occaecat cupidatat. Tempor est adipisicing consectetur excepteur in deserunt reprehenderit. Pariatur velit velit ut aliquip elit tempor anim non nostrud laborum voluptate excepteur. Consequat duis in elit fugiat. Adipisicing incididunt exercitation fugiat anim consequat. Id cupidatat nulla et enim deserunt nulla esse nulla reprehenderit et fugiat.Irure ipsum mollit tempor sint velit. Deserunt consectetur proident officia amet quis pariatur est. Commodo anim cillum dolor pariatur dolor exercitation culpa aliquip deserunt est exercitation.",
  comments: [
    {
      user: keijo,
      time: d.toDateString(),
      text: "Semmosella asialla lähin kommentoimaan että Aute sit consequat mollit sit culpa elit cillum duis eu ea sint. Nostrud non Lorem laboris esse cillum excepteur. Labore amet laboris amet dolore nisi ut esse ea sit enim eu quis pariatur. Magna voluptate commodo deserunt ullamco aute anim et tempor. Amet voluptate commodo irure ad deserunt sit amet ex aliqua dolor ea anim eiusmod veniam.",
    },
  ],
});*/
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
