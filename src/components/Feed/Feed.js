import React from "react";
import { useEffect, useState } from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { NavBar } from "../NavBar/NavBar";
import { NavigationArea } from "./NavigationArea/NavigationArea";
import { useStyles } from "./FeedStyles";
import { useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ContactsArea } from "./ContactsArea/ContactsArea";
import { PostsArea } from "./PostsArea/PostsArea";
import CommentIcon from "@mui/icons-material/Comment";
import { ContactsDrawer } from "./ContactsDrawer";
import { useAppContext } from "../ContextProvider/ContextProvider";
import { NewPost } from "./PostsArea/NewPost";
import PeopleIcon from "@mui/icons-material/People";

// Feed page
export const Feed = ({ menuitems }) => {
  const [newPost, setNewPost] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [scroll, setScroll] = useState(0);
  const classes = useStyles();
  const theme = useTheme();
  const smallscreen = useMediaQuery(theme.breakpoints.down("lg"));
  const xsscreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { contacts } = useAppContext();

  // On page load, scroll to top of the page
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  // scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll]);

  // Hide feed header on scroll down
  const handleScroll = () => {
    if (window.scrollY > scroll && window.scrollY > 80) setShowHeader(false);
    else {
      if (window.scrollY < scroll) setShowHeader(true);
    }
    setScroll(window.scrollY);
  };

  // New post - true, all components behind NewPost component will hace reduced opacity
  const createNewPost = () => {
    setNewPost(true);
  };

  // Called from NewPost component after New Post is created
  const handleShowNewPostWindow = (e) => {
    setNewPost(e);
  };

  return (
    <>
      {smallscreen ? (
        <Box
          className={classes.feedcontainer}
          style={{ opacity: newPost ? 0.5 : 1.0 }}
        >
          <NavBar menuitems={menuitems} style={{ position: "fixed" }} />
          <Box>
            <Grid
              container
              justifyContent="center"
              style={{
                paddingTop: ".5rem",
              }}
            >
              <Grid
                container
                sx={{
                  position: "sticky",
                  top: "3rem",
                  paddingTop: "1rem",
                  background: "white",
                  transition: "0.3s linear",
                  zIndex: 999,
                  opacity: showHeader ? 1 : 0,
                }}
              >
                <Grid item xs={1}></Grid>
                <Grid item xs={10} display="flex">
                  <Box
                    flexDirection="column"
                    className={classes.feedheadercontainer}
                    ml={1}
                    style={{
                      minWidth: "100%",
                      zIndex: 9999,
                    }}
                  >
                    <Box display="flex" alignItems="center">
                      <Typography variant="h5" mb={1} pt={1}>
                        Feed
                      </Typography>
                      <Box
                        display="flex"
                        justifyContent="center"
                        marginLeft="auto"
                        mr={1}
                      >
                        <Button
                          variant="outlined"
                          onClick={createNewPost}
                          /* style={{
                            transform: xsscreen ? "scale(0.8)" : "scale(1.0)",
                          }} */
                        >
                          <CommentIcon />
                          <Typography
                            ml={2}
                            style={{ fontSize: xsscreen ? "0.8em" : "1em" }}
                          >
                            New Post
                          </Typography>
                        </Button>
                      </Box>
                    </Box>
                    <hr width="100%" />
                  </Box>
                </Grid>
                <Grid item xs={1}></Grid>
              </Grid>
              {/* Future feature.. */}
              {/* <Box
                style={{
                  background: "white",
                  position: "absolute",
                  right: "10px",
                  top: "10x",
                }}
              >
                <ContactsDrawer contacts={contacts} />
              </Box> */}
              <Grid item xs={12} sm={10} md={9} mt={3}>
                <Box
                  style={{
                    width: "100%",
                  }}
                >
                  <Box className={classes.postsarea}>
                    <PostsArea />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      ) : (
        <Box
          className={classes.feedcontainer}
          style={{
            opacity: newPost ? 0.5 : 1.0,
          }}
        >
          <NavBar menuitems={menuitems} style={{ position: "fixed" }} />

          <Grid
            container
            justifyContent="space-around"
            className={classes.gridheaders}
          >
            <Grid item xs={2}>
              <Box>
                <Typography variant="h5" mb={1}>
                  Menu
                </Typography>
                <hr width="100%" />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                display="flex"
                flexDirection="column"
                className={classes.feedheadercontainer}
              >
                <Box display="flex" alignItems="center">
                  <Typography variant="h5" mb={1}>
                    Feed
                  </Typography>
                  <Box display="flex" justifyContent="center" marginLeft="auto">
                    <Button variant="outlined" onClick={createNewPost}>
                      <CommentIcon />
                      <Typography ml={2}>New Post</Typography>
                    </Button>
                  </Box>
                </Box>
                <hr width="100%" />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box display="flex" flexDirection="column" width="100%">
                <Box display="flex">
                  <Typography variant="h5" mb={1}>
                    Contacts
                  </Typography>

                  <PeopleIcon
                    style={{
                      transform: "scale(1.3)",
                      marginLeft: "auto",
                      marginTop: "0px",
                      marginBottom: ".6rem",
                      marginRight: ".5rem",
                      alignSelf: "flex-end",
                      color: theme.palette.primary.main,
                    }}
                  />
                </Box>
                <hr width="100%" />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <div
                style={{
                  width: "100%",
                  height: "1.5rem",
                  background: "white",
                  position: "sticky",
                  top: "8rem",
                  opacity: 0.95,
                  zIndex: 400,
                }}
              ></div>
            </Grid>
          </Grid>
          <Grid container className={classes.gridcontainer}>
            <Grid item xs={2}>
              <Paper
                elevation={2}
                style={{
                  position: "sticky",
                  top: "9.5rem",
                  height: "72vh",
                  background: theme.palette.background.paper,
                }}
              >
                <Box
                  style={{
                    boxSizing: "border-box",
                    width: "16vw",
                  }}
                >
                  <NavigationArea menuitems={menuitems} feedPage={true} />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Box className={classes.postsarea}>
                <PostsArea />
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.contacts}>
              <Paper
                elevation={2}
                style={{
                  position: "sticky",
                  top: "9.5rem",
                  width: "100%",
                  height: "72vh",
                  background: theme.palette.background.paper,
                }}
              >
                <Box className={classes.contactsarea} p={1}>
                  <ContactsArea contacts={contacts} />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      )}
      {newPost && <NewPost showWindow={handleShowNewPostWindow} />}
    </>
  );
};
