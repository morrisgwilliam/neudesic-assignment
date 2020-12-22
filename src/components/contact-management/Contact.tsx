import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact } from "../../store/actions/action.creators";
import { IContactState } from "../../store/reducers/contactReducer";

const Contact: React.FC = () => {
  const contact: IContactState = useSelector((state: any) => state.contact);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContact(`some id`));
  }, [dispatch]);

  return (
    <>
      Contact Page: Contact: ID is: {contact.current.ID} || name is:{" "}
      {contact.current.Name}
    </>
  );
};

export default Contact;
