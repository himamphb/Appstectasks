import { ADD_CONTACT, ADD_EMAIL, DELETE_CONTACT } from "./action"


const initialState = {
    contact : [],
    email : []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_CONTACT : 
            return {
                ...state,
                contact : [...state.contact , action.payload]
            }
        case DELETE_CONTACT : 
            return {
                ...state,
                contact : state.contact.filter(ele => ele.id !== action.payload)
            }
        case ADD_EMAIL : 
            return {
                    ...state,
                    email : [...state.email , action.payload]
            }
        default :
        return state;
    }
}
export default reducer;