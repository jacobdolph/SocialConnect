import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "../../features/Nav";
import ActivityDashboard from "../../features/Activities/Dashboard/ActivityDashboard";
import { observer } from "mobx-react-lite";
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from "react-router-dom";
import HomePage from "../../features/Home";
import ActivityForm from "../../features/Activities/Form/ActivityForm";
import ActivityDetails from "../../features/Activities/Details/ActivityDetails";
import NotFound from "./NotFound";
import { ToastContainer } from "react-toastify";
import LoginForm from "../../features/User/LoginForm";
const App: React.FC<RouteComponentProps> = ({ location }) => {
  return (
    <Fragment>
      <ToastContainer position="bottom-right" />
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <Fragment>
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
              <Switch>
                <Route exact path="/activities" component={ActivityDashboard} />
                <Route path="/activities/:id" component={ActivityDetails} />
                <Route
                  key={location.key}
                  path={["/createActivity", "/manage/:id"]}
                  component={ActivityForm}
                />
                <Route path="/login" component={LoginForm} />
                <Route component={NotFound} />
              </Switch>
            </Container>
          </Fragment>
        )}
      />
    </Fragment>
  );
};

export default withRouter(observer(App));
