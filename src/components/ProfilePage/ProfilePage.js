import React from "react";
import { useEffect, useState, useRef } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { NavBar } from "../NavBar/NavBar";
import { useStyles } from "./ProfilPageStyles";
import { useAppContext } from "../ContextProvider/ContextProvider";
import { useLocation } from "react-router-dom";
import { TabsArea } from "./TabsArea";
import { AboutMeCard } from "./Cards/AboutMeCard";
import { WorkCard } from "./Cards/WorkCard";
import { ContactCard } from "./Cards/ContactCard";
import { GitHubCard } from "./Cards/GitHubCard";
import { PostsCard } from "./Cards/PostsCard";

// Profile page
export const ProfilePage = ({ menuitems }) => {
  const classes = useStyles();
  const location = useLocation();
  const { contacts } = useAppContext();
  const [user, setUser] = useState();
  const [showTabs, setShowTabs] = useState(true);
  const [scroll, setScroll] = useState();
  const aboutMeRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const githubRef = useRef(null);
  const postsRef = useRef(null);
  const gridRef = useRef(null);

  // Finds the user matching url
  useEffect(() => {
    const urlname = location.pathname.split("/")[2];
    const usermatch = contacts.find((user) => user.name === urlname);
    if (usermatch) {
      // scroll to top of the page
      window.scrollTo({ top: gridRef.current.offsetTop - 80 });
      setUser(usermatch);
    }
  }, [location.pathname]);

  // scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll]);

  // Hide name and tabs on scroll down
  const handleScroll = () => {
    if (
      window.scrollY > scroll &&
      window.scrollY > aboutMeRef.current.offsetTop
    )
      setShowTabs(false);
    else {
      if (window.scrollY < scroll) setShowTabs(true);
    }
    setScroll(window.scrollY);
  };

  // Scroll to component matching the tab value
  const scrollToComponent = (e) => {
    switch (e) {
      case "1":
        window.scrollTo({
          top: aboutMeRef.current.offsetTop - 150,
          behavior: "smooth",
        });
        break;
      case "2":
        window.scrollTo({
          top: workRef.current.offsetTop - 150,
          behavior: "smooth",
        });
        break;
      case "3":
        window.scrollTo({
          top: contactRef.current.offsetTop - 150,
          behavior: "smooth",
        });
        break;
      case "4":
        window.scrollTo({
          top: githubRef.current.offsetTop - 150,
          behavior: "smooth",
        });
        break;
      case "5":
        window.scrollTo({
          top: postsRef.current.offsetTop - 150,
          behavior: "smooth",
        });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Box className={classes.container}>
        <NavBar menuitems={menuitems} />
        <Grid container className={classes.gridContainer}>
          <Grid
            ref={gridRef}
            item
            className={classes.gridBackgroundImage}
            xs={12}
            boxShadow={2}
          >
            {user && user.profilebackgroundimage && (
              <img
                className={classes.backgroundImage}
                src={user.profilebackgroundimage}
                alt="backgroundimage"
              />
            )}
          </Grid>
          <Grid
            item
            className={
              showTabs ? classes.showGridNameHeader : classes.hideGridNameHeader
            }
            xs={12}
          >
            <Box display="flex" flexDirection="column">
              <Typography variant="h3" mb={1}>
                {user && user.name}
              </Typography>
              <hr style={{ marginBottom: ".5rem" }} />
              <TabsArea scrollToComponent={scrollToComponent} />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box className={classes.infoContainer}>
              <div ref={aboutMeRef}>
                <AboutMeCard user={user} />
              </div>
              <div ref={workRef}>
                <WorkCard user={user} />
              </div>
              <div ref={contactRef}>
                <ContactCard user={user} />
              </div>
              <div ref={githubRef}>
                <GitHubCard user={user} />
              </div>
              <div ref={postsRef}>
                <PostsCard user={user} />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
