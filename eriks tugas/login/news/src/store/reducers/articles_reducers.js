import {GET_OTHER, GET_LATEST} from "../types";

export default function articles(state={}, action){
  switch(action.type){
    case GET_LATEST:
        return{...state,latest: action.payload}
  
  case GET_OTHER:
        return{...state,otherNews: action.payload}
        default:
            return state;

    }
}

