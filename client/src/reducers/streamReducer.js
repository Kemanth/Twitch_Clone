import 
    { 
        CREATE_STREAM,
        FETCH_STREAMS,
        FETCH_STREAM,
        UPDATE_STREAM,
        DETETE_STREAM,
    } from "../actions/types";

import _ from 'lodash';

const streamReducer  = (state = {}, action) => {
    switch(action.type){
        case CREATE_STREAM :
            return {...state, [action.payload.id] : action.payload}
        case FETCH_STREAMS :
            return {...state, ..._.mapKeys(action.payload, 'id')}
        case FETCH_STREAM :
            return {...state, [action.payload.id] : action.payload}
        case UPDATE_STREAM :
            return {...state, [action.payload.id] : action.payload}
        case DETETE_STREAM : 
            return _.omit(state, action.payload)
        default :
            return state
    }
}

export default streamReducer;