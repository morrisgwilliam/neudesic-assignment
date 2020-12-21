import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ContactManagement from "../contact-management";

export const PrivateRoutes: React.FC = () => {
  return (
    <>
      <Switch>
        <Redirect from="/" to="/contact-management" exact />
        <Route path="/contact-management" component={ContactManagement} />
        <Route component={() => <>Page not found.</>} />
      </Switch>
    </>
  );
};
