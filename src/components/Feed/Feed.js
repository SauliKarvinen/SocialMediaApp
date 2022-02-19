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
  const classes = useStyles();
  const theme = useTheme();
  const smallscreen = useMediaQuery(theme.breakpoints.down("lg"));
  const xlscreen = useMediaQuery(theme.breakpoints.up("xl"));
  const { contacts } = useAppContext();

  // On page load, scroll to top of the page
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

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
            <Box
              style={{
                width: "100vw",
                height: "5.5rem",
                background: "white",
                position: "fixed",
              }}
            ></Box>
            <Grid
              container
              justifyContent="center"
              style={{ height: "4rem", paddingTop: ".5rem" }}
            >
              <Grid item xs={0} sm={1}></Grid>
              <Grid item xs={9} display="flex" style={{ background: "white" }}>
                <Box
                  flexDirection="column"
                  className={classes.feedheadercontainer}
                  style={{ background: "white" }}
                >
                  <Box display="flex" alignItems="center">
                    <Typography variant="h5" mb={1} pt={1}>
                      Feed
                    </Typography>
                    <Box
                      display="flex"
                      justifyContent="center"
                      marginLeft="auto"
                    >
                      <Button variant="outlined" onClick={createNewPost}>
                        <CommentIcon />
                        <Typography ml={2}>New Post</Typography>
                      </Button>
                    </Box>
                  </Box>
                  <hr width="100%" />
                </Box>
              </Grid>
              <Grid item xs={1} style={{ background: "white" }}>
                <ContactsDrawer contacts={contacts} />
              </Grid>
              <Grid item xs={12}>
                <div
                  style={{
                    width: "100vw",
                    height: "2rem",
                    background: "white",
                    position: "fixed",
                    top: "5rem",
                    opacity: 0.9,
                  }}
                ></div>
              </Grid>
              <Grid item xs={12} sm={10} md={9}>
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
          style={{ opacity: newPost ? 0.5 : 1.0 }}
        >
          <NavBar menuitems={menuitems} style={{ position: "fixed" }} />
          <Box className={classes.gridheaders}>
            <Grid container justifyContent="space-around">
              <Grid item xs={2}>
                <Box
                  style={{
                    position: "fixed",
                    width: "16vw",
                    paddingTop: "1rem",
                  }}
                >
                  <Typography variant="h5" mb={1} pt={2}>
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
                  style={{ zIndex: 500 }}
                >
                  <Box display="flex" alignItems="center">
                    <Typography variant="h5" mb={1} pt={2}>
                      Feed
                    </Typography>
                    <Box
                      display="flex"
                      justifyContent="center"
                      marginLeft="auto"
                    >
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
                <Box
                  display="flex"
                  flexDirection="column"
                  style={{
                    position: "fixed",
                    width: "16vw",
                    paddingTop: "1rem",
                  }}
                >
                  <Box display="flex">
                    <Typography variant="h5" mb={1} pt={2}>
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
            </Grid>
            <Grid container className={classes.gridcontainer}>
              <Grid item xs={2}>
                <Paper
                  elevation={2}
                  style={{
                    position: "fixed",
                    width: "16vw",
                    height: "75vh",
                    marginTop: "1.5rem",
                  }}
                >
                  <Box
                    style={{
                      position: "fixed",
                      boxSizing: "border-box",
                      width: "16vw",
                    }}
                  >
                    <NavigationArea menuitems={menuitems} feedPage={true} />
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <div
                  style={{
                    width: xlscreen ? "47vw" : "50vw",
                    height: "1.8rem",
                    background: "white",
                    position: "fixed",
                    top: "8rem",
                    opacity: 0.95,
                    zIndex: 400,
                  }}
                ></div>
                <Box
                  className={classes.postsarea}
                  style={{ paddingLeft: "4px" }}
                >
                  <PostsArea />
                </Box>
              </Grid>
              <Grid item xs={2} className={classes.contacts}>
                <Paper
                  elevation={2}
                  style={{
                    position: "fixed",
                    width: "16vw",
                    height: "75vh",
                    marginTop: "1.5rem",
                  }}
                >
                  <Box className={classes.contactsarea} p={1}>
                    <ContactsArea contacts={contacts} />
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
      {newPost && <NewPost showWindow={handleShowNewPostWindow} />}
    </>
  );
};
