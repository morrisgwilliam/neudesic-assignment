import { ActionsEnum, ContactAction } from "./actions.types";
import { Contact } from "#Entities";
import { Dispatch } from "react";
import { IApplicationState } from "../store";

// User actions

export const logIn = (user: any) => {
  const action = {
    type: ActionsEnum.USER_LOG_IN,
    user,
  };

  return action;
};

export const logOut = () => {
  const action = {
    type: ActionsEnum.USER_LOG_OUT,
  };
  return action;
};

export const getContacts = () => async (
  dispatch: Dispatch<ContactAction>,
  getState: () => IApplicationState
) => {
  try {
    const {
      user: { userID: ownerID },
    } = getState();

    const requestAction: ContactAction = {
      type: ActionsEnum.CONTACTS_REQUEST_BEGIN,
    };
    const requestSuccessAction: ContactAction = {
      type: ActionsEnum.CONTACTS_GET_SUCCESS,
      payload: [],
    };

    dispatch(requestAction);

    requestSuccessAction.payload = await Contact.GetContacts(ownerID);

    dispatch(requestSuccessAction);
  } catch (error) {
    const requestFailAction: ContactAction = {
      type: ActionsEnum.CONTACTS_REQUEST_FAILED,
      payload: error,
    };
    dispatch(requestFailAction);
  } finally {
    const requestCompleteAction: ContactAction = {
      type: ActionsEnum.CONTACTS_REQUEST_END,
    };
    dispatch(requestCompleteAction);
  }
};

export const deleteContact = (contact: Contact) => async (
  dispatch: Dispatch<ContactAction>
) => {
  try {
    // if (!(contact instanceof Contact))
    //   throw new Error(`Please pass a valid contact to delete.`);
    const requestAction: ContactAction = {
      type: ActionsEnum.CONTACTS_REQUEST_BEGIN,
    };
    const requestSuccessAction: ContactAction = {
      type: ActionsEnum.CONTACT_DELETE_SUCCESS,
    };
    dispatch(requestAction);
    await contact.DeleteContact();
    requestSuccessAction.payload = contact;
    dispatch(requestSuccessAction);
  } catch (error) {
    const requestFailAction: ContactAction = {
      type: ActionsEnum.CONTACTS_REQUEST_FAILED,
      payload: error,
    };
    dispatch(requestFailAction);
  } finally {
    const requestCompleteAction: ContactAction = {
      type: ActionsEnum.CONTACTS_REQUEST_END,
    };
    dispatch(requestCompleteAction);
  }
};
