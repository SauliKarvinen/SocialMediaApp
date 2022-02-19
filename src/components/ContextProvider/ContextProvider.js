import React, { useContext, useState } from "react";
import { createTheme, useTheme, ThemeProvider } from "@mui/material/styles";
import { useContacts } from "./contacts";

const ThemeContext = React.createContext();

// Auhtentication context
export const useAppContext = () => {
  return useContext(ThemeContext);
};

// App context provider
export const ContextProvider = ({ children }) => {
  // @mui themes
  const theme = useTheme();
  // custom styles for typograhpy
  const typographyThemes = createTheme({
    typography: {
      h3: {
        fontSize: "2.3rem",
        [theme.breakpoints.down("sm")]: {
          fontSize: "2rem",
        },
      },

      h5: {
        color: "#2f3332",
      },
    },
    palette: {
      primary: { main: "#256fe6" },
      secondary: { main: "#5b5c5b" },
    },
  });

  // logged in user
  //const user = new User("Keijo Koodari", keijoimg, "keijo@gmail.com");
  // user login status
  const contacts = useContacts();
  const user = contacts[0];
  const [loggedIn, setLoggedIn] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(user);
  const [posts, setPosts] = useState();

  // Separate posts from users
  const fetchPosts = () => {
    let postsarr = [];
    for (const { posts } of contacts) {
      for (const p in posts) {
        postsarr.push(posts[p]);
      }
    }
    // Sort posts according to post timestamp from newest to oldest
    postsarr.sort((a, b) => (a.exacttime > b.exacttime ? -1 : 1));

    setPosts(postsarr);
  };

  //context values
  const value = {
    loggedIn: loggedIn,
    loggedInUser: loggedInUser,
    contacts: contacts,
    updatePosts: fetchPosts,
    posts: posts,
  };
  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={{ ...theme, ...typographyThemes }}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
