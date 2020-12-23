import { ActionsEnum, ContactAction } from "../actions/actions.types";
import { Contact } from "#Entities";

export interface IContactsState {
  list: Contact[];
  loading: boolean;
  error: Error | undefined;
}

const initialState: IContactsState = {
  list: [],
  loading: false,
  error: undefined,
};

export const contactsReducer = (
  state: IContactsState = initialState,
  action: ContactAction
): IContactsState => {
  const newState: IContactsState = { ...state };
  switch (action.type) {
    case ActionsEnum.CONTACTS_GET_SUCCESS:
      if (!action.payload) return newState;
      const newContactList: Contact[] = action.payload;
      newState.list = newContactList;

      break;
    case ActionsEnum.CONTACT_DELETE_SUCCESS:
      if (!action.payload) return newState;
      const contactToDelete: Contact = action.payload;
      newState.list = newState.list.filter(
        (contact) => contact.ID !== contactToDelete.ID
      );
      break;
    case ActionsEnum.CONTACTS_REQUEST_BEGIN:
      newState.loading = true;
      break;

    case ActionsEnum.CONTACTS_REQUEST_END:
      newState.loading = false;
      break;
    case ActionsEnum.CONTACTS_REQUEST_FAILED:
      newState.error = action.payload;
      break;
  }
  return newState;
};

export default contactsReducer;
