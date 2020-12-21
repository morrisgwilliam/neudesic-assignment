import React from "react";
import Contacts from "./Contacts";
import Contact from "./Contact";
import { Route, RouteComponentProps, Switch, Redirect } from "react-router-dom";

export const ContactManagement: React.FC<RouteComponentProps> = (props) => {
  const matchUrl = props.match.url;
  return (
    <>
      <Switch>
        <Redirect from={`${matchUrl}`} to={`${matchUrl}/contacts`} />
        <Route component={Contacts} path={`${matchUrl}/contacts`} exact />
        <Route path={`${matchUrl}/contacts/:contactID`} component={Contact} />
      </Switch>
    </>
  );
};
