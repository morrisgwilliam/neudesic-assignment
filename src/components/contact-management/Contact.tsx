import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState, actionCreators } from "#Store";
import { useParams, RouteComponentProps } from "react-router-dom";

const Contact: React.FC<RouteComponentProps> = () => {
  const contacts = useSelector((state: ApplicationState) => state.contacts);
  const { contactID } = useParams<any>();
  const contact = contacts.list.find((_contact) => _contact.ID === contactID);
  const dispatch = useDispatch();

  useEffect(() => {
    // const action = actionCreators.getContact(contactID);
    // dispatch(action);
  }, [dispatch, contactID]);

  if (!contact) {
    return <>No contact found with id: {contactID}</>;
  }
  return (
    <>
      Contact Page: Contact: ID is: {contact.ID} || name is: {contact.Name}
    </>
  );
};

export default Contact;
