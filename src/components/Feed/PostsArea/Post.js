import React from "react";
import { useEffect, useState, useRef } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import { useAppContext } from "../../ContextProvider/ContextProvider";
import { useStyles } from "./PostStyles";
import { useTheme } from "@mui/styles";

// Creates new Post element
export const Post = ({ post }) => {
  const [showComments, setShowComments] = useState();
  const [comment, setComment] = useState("");
  const [postData, setPostData] = useState(post);
  const [commentsStartpoint, setCommentsStartpoint] = useState();
  const classes = useStyles();
  const { loggedInUser } = useAppContext();
  const theme = useTheme();
  const postContainerRef = useRef(null);

  // Set post data on post change
  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);

  // handle comment
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  // send comment
  const sendComment = () => {
    if (comment.length > 1) {
      let commentsArr = postData.comments;
      const time = Date.now();
      const format = new Date(time);
      const newComment = {
        user: loggedInUser,
        time: format.toLocaleString(),
        text: comment,
      };
      commentsArr.push(newComment);
      setPostData({ ...postData, comments: commentsArr });
      setComment("");
    }
  };

  // scroll back to initial window point when comment section is closed
  const handleShowCommentsClick = (e) => {
    if (!showComments) {
      setCommentsStartpoint(window.scrollY);
    }

    if (showComments) {
      window.scrollTo({
        top: commentsStartpoint,
        behavior: "auto",
      });
    }
    setShowComments(!showComments);
  };
  return (
    <Card
      ref={postContainerRef}
      style={{
        marginBottom: "4rem",
        background: theme.palette.background.paper,
      }}
      elevation={3}
    >
      <CardContent>
        <Grid container p={2}>
          <Grid
            item
            xs={12}
            display="flex"
            flexDirection="row"
            alignItems="center"
            style={{
              minWidth: "4.5rem",
              boxSizing: "border-box",
              padding: "2px",
            }}
          >
            {postData.user.profileimg && (
              <Box
                boxShadow={2}
                style={{
                  borderRadius: "50%",
                  width: "4rem",
                  height: "4rem",
                }}
              >
                <img
                  src={postData.user.profileimg}
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                  alt="profileimage"
                />
              </Box>
            )}
            <Box display="flex" flexDirection="column" justifyContent="center">
              <Box
                style={{
                  boxSizing: "border-box",
                  padding: "2px",
                  marginLeft: ".8rem",
                }}
              >
                <Link
                  to={`/${postData.user.name}`}
                  style={{
                    textDecoration: "none",
                    textDecorationColor: "black",
                  }}
                >
                  <Typography variant="h6" style={{ color: "black" }}>
                    {postData.user.name}
                  </Typography>
                </Link>
                <Typography
                  variant="body2"
                  style={{ color: theme.palette.secondary.main }}
                >
                  {postData.time}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        {postData.postimg && <hr width="20%" style={{ margin: "auto" }} />}
        <Grid item p={2}>
          {postData.postimg && (
            <div
              style={{
                maxWidth: "100%",
                maxHeight: "22rem",
                overflow: "hidden",
              }}
            >
              <img
                src={postData.postimg}
                style={{
                  width: "100%",
                  maxHeight: "22rem",
                  objectFit: "contain",
                }}
                alt="postimage"
              />
            </div>
          )}
        </Grid>
        <hr width="20%" style={{ margin: "auto" }} />
        <Grid item p={1}>
          <CardContent>
            <Box className={classes.postText}>
              <Typography style={{ textAlign: "justify" }}>
                {postData.text}
              </Typography>
            </Box>
          </CardContent>
        </Grid>
        {/* <Box display="flex" justifyContent="center" mb={3}>
          <Button onClick={() => setShowComments(!showComments)}>
            {showComments ? (
              <Typography variant="body2">Hide comments</Typography>
            ) : (
              <Typography>
                Show comments ({postData.comments.length})
              </Typography>
            )}
          </Button>
        </Box> */}
        {showComments && (
          <Box display="flex" flexDirection="column" width="90%" pl={4} pb={4}>
            <Typography variant="body2">Comments</Typography>
            <hr style={{ width: "5rem", marginBottom: "1rem" }} />
            {/* MAP COMMENTS */}
            {postData.comments &&
              postData.comments.map((comment, i) => (
                <Box key={i}>
                  <Box
                    boxShadow={2}
                    display="flex"
                    flexDirection="column"
                    style={{ width: "100%" }}
                  >
                    <Grid container pl={2} pt={2} pr={2}>
                      <Grid
                        item
                        xs={12}
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        style={{
                          width: "100%",

                          boxSizing: "border-box",
                          padding: "2px",
                        }}
                      >
                        {comment.user.profileimg && (
                          <Box
                            boxShadow={2}
                            style={{
                              borderRadius: "50%",
                              height: "3rem",
                              width: "3rem",
                            }}
                          >
                            <img
                              src={comment.user.profileimg}
                              style={{
                                maxHeight: "100%",
                                maxWidth: "100%",
                                borderRadius: "50%",
                              }}
                              alt="profileimage"
                            />
                          </Box>
                        )}

                        <Box
                          display="flex"
                          flexDirection="column"
                          justifyContent="center"
                          ml={1}
                        >
                          <Link to={`/${comment.user.name}`}>
                            <Typography variant="h2">
                              {comment.user.name}
                            </Typography>
                            <Typography variant="body4">
                              {comment.time}
                            </Typography>
                          </Link>
                        </Box>
                      </Grid>
                    </Grid>
                    <Box p={3}>
                      <Typography>{comment.text}</Typography>
                    </Box>
                  </Box>
                  {postData.comments.length > 1 && (
                    <hr
                      style={{
                        width: "50%",
                        margin: "2rem auto 2rem",
                      }}
                    />
                  )}
                </Box>
              ))}
          </Box>
        )}
        {/* LEAVE A COMMENT */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          style={{ width: "100%" }}
          gap={1}
          mb={2}
        >
          <TextField
            style={{ width: "90%" }}
            placeholder={`Leave a comment to ${postData.user.name}!`}
            value={comment}
            onChange={handleCommentChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" color="primary" onClick={sendComment}>
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></TextField>
          <Box display="flex" justifyContent="center" mb={3}>
            <Button onClick={handleShowCommentsClick}>
              {showComments ? (
                <Typography variant="body2">Hide comments</Typography>
              ) : (
                <Typography>
                  Show comments ({postData.comments.length})
                </Typography>
              )}
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
