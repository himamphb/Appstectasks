import { createSelector } from "reselect";

const allContacts = (state) => state.contact;
const allEmails = (state) => state.email;

const selectContact = createSelector(
  [allContacts],
  (contactsFromState) => contactsFromState
);
const selectEmail = createSelector(
    [allEmails],
    (contactsFromState) => contactsFromState
  );

const nameCount = createSelector(
    [selectContact],
    (users) => {
      return users.filter((ele) => ele !== "").length
    }                              
)
const emailCount = createSelector(
    [selectEmail],
    (users) => {
      return users.filter((ele) => ele !== "").length
    }
)
export {nameCount, emailCount, selectContact, selectEmail}