export const ADD_COMMENT = "ADD_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT"
export const REPLY_COMMENT = "REPLY_COMMENT"
export const DELETE_PARENT_COMMENT = "DELETE_PARENT_COMMENT"

export const addComment = (comments) => ({
    type:ADD_COMMENT,
    payload : comments
})

export const deleteComment = (id) => ({
    type:DELETE_COMMENT,
    payload : id
})

export const replyComment = (obj) => ({
    type:REPLY_COMMENT,
    payload : obj
})

export const deleteParentComment = (id) => ({
    type :DELETE_PARENT_COMMENT,
    payload : id
})

