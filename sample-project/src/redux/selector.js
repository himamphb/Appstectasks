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
    (user) => user.length                               
)
const emailCount = createSelector(
    [selectEmail],
    (users) => users.length
)
export {nameCount, emailCount, selectContact, selectEmail}