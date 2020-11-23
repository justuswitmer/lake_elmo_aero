import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import { connect } from "react-redux";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import AboutPage from "../AboutPage/AboutPage";
import UserPage from "../UserPage/UserPage";
import InfoPage from "../InfoPage/InfoPage";
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";

//Wireframe Imports
import Admin from "../Admin/Admin";
import AdminLogin from "../AdminLogin/AdminLogin";
import StepOne from "../StepOne/StepOne";
import ApptSuccess from "../ApptSuccess/ApptSuccess";
import FieldServiceForm from "../FieldServiceForm/FieldServiceForm";
import JetAFuelForm from "../JetAFuelForm/JetAFuelForm";
import Header from "../Header/Header";
import FieldServiceApptForm from "../FieldServiceApptForm/FieldServiceApptForm";
import ReviewSubmit from "../ReviewSubmit/ReviewSubmit";
import ReviewSubmitJetA from "../ReviewSubmitJetA/ReviewSubmitJetA";
import AdminHistory from "../AdminHistory/AdminHistory";
import ConfirmEmail from "../confirmEmail/ConfirmEmail";

//Style Imports
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "../styles/styles.css";
import "../styles/utilities.css";


class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_USER" });
    this.props.dispatch({ type: "FETCH_PRICE" });
    this.props.dispatch({ type: "FETCH_APPOINTMENT" });
  }

  render() {
    console.log(`                  ><              
                  /\\
                 |^^|
                 |{}|
  _______________/~~\\________________
 /   LAKE      EL|  |MO       AERO   \\
'========--------.  .---------========'
                 ||||
                  ||
                  ||
                  ||
              .---||---.
              '---<>---'`);
    console.log("redux");

    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={StepOne} />
          <Route
            exact
            path="/FieldServiceApptForm"
            component={FieldServiceApptForm}
          />
          <Route exact path="/FieldServiceForm" component={FieldServiceForm} />
          <Route exact path="/ReviewSubmit" component={ReviewSubmit} />
          <Route exact path="/ReviewSubmitJetA" component={ReviewSubmitJetA} />
          <Route exact path="/ApptSuccess" component={ApptSuccess} />
          <Route exact path="/JetAService" component={JetAFuelForm} />

          {/* <Nav /> */}
          {/* <Switch> */}
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          {/* <Redirect exact from="/" to="/home" /> */}

          {/* Visiting localhost:3000/about will show the about page. */}
          {/* <Route
              // shows AboutPage at all times (logged in or not)
              exact
              path="/about"
              component={AboutPage}
            /> */}

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          {/* <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/user"
              component={UserPage}
            /> */}

          {/* <ProtectedRoute
              // logged in shows InfoPage else shows LoginPage
              exact
              path="/info"
              component={InfoPage}
            /> */}

          {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows LoginPage at /login
            exact
            path="/login"
            component={LoginPage}
            authRedirect="/user"
          />

          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows RegisterPage at "/registration"
            exact
            path="/registration"
            component={RegisterPage}
            authRedirect="/user"
          />
          {/*             
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LandingPage at "/home"
              exact
              path="/home"
              component={LandingPage}
              // authRedirect="/user"
            /> */}

          {/* <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LandingPage at "/home"
              exact
              path="/home"
              component={AdminLogin}
              // authRedirect="/user"
            /> */}

          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows LandingPage at "/home"
            exact
            path="/user"
            component={Admin}
          />

          {/* <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LandingPage at "/home"
              exact
              path="/home"
              component={AdminHistory}
              // authRedirect="/user"
            /> */}

          {/* <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LandingPage at "/home"
              exact
              path="/home"
              component={StepTwo}
              // authRedirect="/user"
            /> */}

          {/* <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LandingPage at "/home"
              exact
              path="/home"
              component={JetAFuelForm}
              // authRedirect="/user"
            /> */}

          {/* If none of the other routes matched, we will show a 404. */}
          {/* <Route render={() => <h1>404</h1>} />
          </Switch> */}
          {/* <Footer /> */}
        </div>
        <Route
          exact
          path="/email-confirm"
        >
          <ConfirmEmail />
        </Route>
      </Router>
    );
  }
}

export default connect()(App);
