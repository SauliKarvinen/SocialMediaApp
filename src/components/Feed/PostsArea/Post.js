import React from "react";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
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

// Creates new Post element
export const Post = ({ post }) => {
  const [showComments, setShowComments] = useState();
  const [comment, setComment] = useState("");
  const [postData, setPostData] = useState(post);
  const classes = useStyles();
  const { loggedInUser } = useAppContext();

  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const sendComment = () => {
    if (comment.length > 1) {
      let commentsArr = postData.comments;
      const time = Date.now();
      const format = new Date(time);
      const newComment = {
        user: loggedInUser,
        time: format.toDateString(),
        text: comment,
      };
      commentsArr.push(newComment);
      setPostData({ ...postData, comments: commentsArr });
      setComment("");
    }

    //const newpost = new UserPost(post);
  };
  return (
    <Card style={{ marginBottom: "4rem" }} elevation={3}>
      <CardContent>
        <Grid container p={2}>
          <Grid
            item
            xs={2}
            style={{
              minHeight: "4rem",
              minWidth: "4rem",
              maxHeight: "5rem",
              maxWidth: "5rem",
              boxSizing: "border-box",
              padding: "2px",
            }}
          >
            {postData.user.profileimg && (
              <Box
                maxWidth="100%"
                maxHeight="100%"
                minWidth="1rem%"
                minHeight="1rem%"
                boxShadow={2}
                style={{
                  background: "blue",
                  borderRadius: "50%",
                }}
              >
                <img
                  src={postData.user.profileimg}
                  style={{
                    minHeight: "100%",
                    minWidth: "100%",
                    maxHeight: "100%",
                    maxWidth: "100%",
                    borderRadius: "50%",
                  }}
                  alt="profileimage"
                />
              </Box>
            )}
          </Grid>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Grid
              item
              xs={10}
              style={{
                maxWidth: "100%",
                boxSizing: "border-box",
                padding: "2px",
                marginLeft: ".5rem",
              }}
            >
              <Link
                to={`/${postData.user.name}`}
                style={{ textDecoration: "none" }}
              >
                <Typography style={{ fontSize: "1.6rem" }}>
                  {postData.user.name}
                </Typography>
              </Link>
              <Typography variant="body2">{postData.time}</Typography>
            </Grid>
          </Box>
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
        <Box display="flex" justifyContent="center" mb={3}>
          <Button onClick={() => setShowComments(!showComments)}>
            {showComments ? (
              <Typography variant="body2">Hide comments</Typography>
            ) : (
              <Typography>
                Show comments ({postData.comments.length})
              </Typography>
            )}
          </Button>
        </Box>
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
        </Box>

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
                        xs={2}
                        style={{
                          maxHeight: "3rem",
                          maxWidth: "3rem",
                          boxSizing: "border-box",
                          padding: "2px",
                        }}
                      >
                        {comment.user.profileimg && (
                          <Box
                            maxWidth="100%"
                            maxHeight="100%"
                            boxShadow={2}
                            style={{
                              background: "blue",
                              borderRadius: "50%",
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
                      </Grid>
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                      >
                        <Grid
                          item
                          xs={10}
                          style={{
                            maxHeight: "4rem",
                            maxWidth: "100%",
                            boxSizing: "border-box",
                            padding: "2px",
                          }}
                        >
                          <Link to={`/${comment.user.name}`}>
                            <CardHeader
                              titleTypographyProps={{
                                fontSize: "clamp(0.3em, 0.3em + 2vw, 1em)",
                              }}
                              subheaderTypographyProps={{
                                fontSize: "clamp(0.2em, 0.2em + 2vw, 0.8em)",
                              }}
                              style={{ margin: "0px", padding: "0px" }}
                              title={comment.user.name}
                              subheader={comment.time}
                            />
                          </Link>
                        </Grid>
                      </Box>
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
      </CardContent>
    </Card>
  );
};
