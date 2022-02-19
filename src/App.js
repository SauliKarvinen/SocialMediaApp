import "./App.css";
import { ContextProvider } from "./components/ContextProvider/ContextProvider";
import { LogIn } from "./components/LogIn/LogIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { Feed } from "./components/Feed/Feed";
import { ProfilePage } from "./components/ProfilePage/ProfilePage";
import { MessagesPage } from "./components/Messages/MessagesPage";
import { ContactsPage } from "./components/ContactsPage/ContactsPage";
import { Signup } from "./components/Signup/Signup";
const items = ["Feed", "Contacts", "Messages", "Profile", "Log Out"];
function App() {
  return (
    <ContextProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={LogIn} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={Signup} />
          <PrivateRoute exact path="/feed" component={Feed} menuitems={items} />

          <PrivateRoute
            path="/profile"
            component={ProfilePage}
            menuitems={items}
          />
          <PrivateRoute
            exact
            path="/messages"
            component={MessagesPage}
            menuitems={items}
          />
          <PrivateRoute
            exact
            path="/contacts"
            component={ContactsPage}
            menuitems={items}
          />

          <Route
            exact
            path="*"
            component={() => (
              <div style={{ margin: "auto", fontSize: "5rem" }}>
                404 page not found
              </div>
            )}
          />
        </Switch>
      </Router>
    </ContextProvider>
  );
}

export default App;
