import { ADD_CONTACT } from "./action";

const initialState = {
    contacts : []
}
 const reducer = (state = initialState , action) => {
    switch(action.type) {
        case ADD_CONTACT : 
        return {
            ...state,
            contact : [...state.contacts, action.payload]
        }
        default :
        return state;
    }
}
export default reducer;