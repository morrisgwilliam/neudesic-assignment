import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState, actionCreators } from "../../store";

const Contact: React.FC = () => {
  const contact = useSelector((state: ApplicationState) => state.contact);
  const dispatch = useDispatch();

  useEffect(() => {
    const action = actionCreators.getContact(`some id`);
    dispatch(action);
  }, [dispatch]);

  return (
    <>
      Contact Page: Contact: ID is: {contact.current.ID} || name is:{" "}
      {contact.current.Name}
    </>
  );
};

export default Contact;
