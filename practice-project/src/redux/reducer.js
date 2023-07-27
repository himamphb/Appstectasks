import { ADD_COMMENT,DELETE_COMMENT, REPLY_COMMENT, DELETE_PARENT_COMMENT } from "./action";

const initialState = {
    comments : [],
    childCommentsArray : [],
    nestedChildArray  :[]
}
 const reducer = (state = initialState , action) => {
    switch(action.type) {
        case ADD_COMMENT : 
        return {
            ...state,
            comments : [...state.comments, action.payload]
        }
        case REPLY_COMMENT : 
        return {
            ...state,
            childCommentsArray : [...state.childCommentsArray, action.payload]
        }
        case DELETE_COMMENT : 
        return {
            ...state,
            childCommentsArray : state.childCommentsArray.filter((ele) => (
                ele.id !== action.payload
            ))
        }
        case DELETE_PARENT_COMMENT : 
        return {
            ...state,
            comments : state.comments.filter((ele) => (
                ele.id !== action.payload
            ))
        }
        default :
        return state;
    }
}
export default reducer;