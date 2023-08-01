import { ADD_CONTACT, ADD_EMAIL, ADD_FORM, DELETE_CONTACT } from "./action"


const initialState = {
    contact : [],
    email : [],
    data : []
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
        case ADD_FORM : 
            return {
                ...state,
                data: {...state.data,...action.payload},
            }
        default :
        return state;
    }
}
export default reducer;