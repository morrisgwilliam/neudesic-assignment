import { Contact } from "#Entities";
enum UserEnum {
  // USER ACTIONS
  USER_LOG_IN = "USER_LOG_IN",
  USER_LOG_OUT = "USER_LOG_OUT",

  // CONTACT ACTIONS
}

enum ContactEnum {
  CONTACTS_REQUEST_BEGIN = "CONTACTS_REQUEST_BEGIN",
  CONTACTS_REQUEST_END = "CONTACTS_REQUEST_END",
  CONTACTS_REQUEST_FAILED = "CONTACTS_REQUEST_FAILED",

  CONTACT_CREATE = "CONTACT_CREATE ",
  CONTACT_DELETE_SUCCESS = "CONTACT_DELETE_SUCCESS",

  CONTACTS_GET_SUCCESS = "CONTACTS_GET_SUCCESS",
}

export const ActionsEnum = { ...UserEnum, ...ContactEnum };
//export type ActionsEnum = typeof ActionsEnum

export type ContactAction = {
  type: ContactEnum;
  payload?: any;
};

export type UserAction = {
  type: UserEnum;
  user?: any;
};
