import { ADD_COMMENT } from "../constants";


export function addCommentAction(comment) {
  return {
    type: ADD_COMMENT,
    payload: comment
  }
}