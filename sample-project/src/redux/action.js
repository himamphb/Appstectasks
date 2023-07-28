export const ADD_CONTACT = "ADD_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT"
export const ADD_EMAIL = "ADD_EMAIL"

export const addContact = (contact) => ({
    type:ADD_CONTACT,
    payload : contact
})
export const deleteContact = (id) => ({
    type:DELETE_CONTACT,
    payload : id
})
export const addEmail = (email) => ({
    type:ADD_EMAIL,
    payload : email
})