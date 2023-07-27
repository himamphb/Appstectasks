import { ADD_CONTACT, DELETE_CONTACT } from "./action"


const initialState = {
    contact : []
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
        default :
        return state;
    }
}
export default reducer;