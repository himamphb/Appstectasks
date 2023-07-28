import { ADD_COMMENT,DELETE_COMMENT, REPLY_COMMENT, DELETE_PARENT_COMMENT } from "./action";

const initialState = {
    comments : [],
    
}
 const reducer = (state = initialState , action) => {
    switch(action.type) {
        case ADD_COMMENT : 
        console.log(state);
        return {
            
            ...state,
            comments : [...state.comments, action.payload]
        }
        case REPLY_COMMENT : 
    
        const {parentId} = action.payload
 
        const parentIndex = state.comments.findIndex((val) => val.id == parentId)
        if(parentIndex !== -1){
            const stateCopy = [...state.comments]
            const replyCopy = [...state.comments[parentIndex].reply]
            replyCopy.push(action.payload)
            stateCopy[parentIndex] = {
                ...stateCopy[parentIndex],
               reply :  replyCopy
            }
            return {
                ...state,
                comments : stateCopy
            }
        }else{
            console.log("else");
            return state
        }
     
        
        case DELETE_COMMENT : 
        // return {
        //     ...state,
        //     childCommentsArray : state.childCommentsArray.filter((ele) => (
        //         ele.id !== action.payload
        //     ))
        // }
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