import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../Nav/Nav";
// import Footer from "../Footer/Footer";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import AboutPage from "../AboutPage/AboutPage";
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import NewEvent from "../NewEvent/NewEvent";
import SubmitContactInfo from "../ContactInfo/ContactInfo";
import AdminArchive from "../AdminArchive/AdminArchive";
import AdminNewEvent from "../AdminNewEvent/AdminNewEvent";
import RemovedEvents from "../RemovedEvents/RemovedEvents";
import EditTags from "../EditTag/EditTag";
import EditEvent from "../EditEvent/EventEdit";
import SplashScreen from "../SplashScreen/SplashScreen";
import DisplayContact from "../ContactInfo/DisplayContact";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:5173 will redirect to localhost:5173/home */}
          <Redirect exact from="/" to="/welcome" />

          {/* Visiting localhost:5173/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          <Route exact path="/welcome">
            <SplashScreen />
          </Route>

          <Route exact path="/newevent">
            <NewEvent />
          </Route>

          <Route exact path="/contactinfo">
            <SubmitContactInfo />
          </Route>
          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:5173/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:5173/user */}

          <ProtectedRoute
            // admin created event
            exact
            path="/adminnewevent"
          >
            <AdminNewEvent />
          </ProtectedRoute>

          <ProtectedRoute exact path="/eventarchive">
            <AdminArchive />
          </ProtectedRoute>

          <Route exact path="/edit_tag/:id">
            <EditTags />
          </Route>
          <Route exact path="/edit_event/:id">
            <EditEvent />
          </Route>

          <Route exact path="/removedevents">
            <RemovedEvents />
          </Route>

          <Route exact path="/login">
            {user.id ? (
              // If the user is already logged in,
              // redirect to the /user page
              <Redirect to="/eventarchive" />
            ) : (
              // Otherwise, show the login page
              <LoginPage />
            )}
          </Route>

          <Route exact path="/contactcard/:id">
            <DisplayContact />
          </Route>

          <Route exact path="/registration">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /eventarchive page
              <Redirect to="/eventarchive" />
            ) : (
              // Otherwise, show the registration page
              <RegisterPage />
            )}
          </Route>

          <Route exact path="/home">
            <LandingPage />
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
