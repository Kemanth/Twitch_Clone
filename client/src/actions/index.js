import 
    { 
        SIGN_IN, 
        SIGN_OUT,
        CREATE_STREAM,
        FETCH_STREAMS,
        FETCH_STREAM,
        UPDATE_STREAM,
        DETETE_STREAM,
    } from "./types";

import streams from "../components/apis/streams";
import history from "../history";

export const signIn = (userId) => {
    return {
        type : SIGN_IN,
        payload : userId,
    }
}

export const signOut = () => {
    return {
        type : SIGN_OUT,
    }
}

export const createStream = (formValues) => {
    return async (dispatch, getState) => {
        const {userId} = getState().auth;
        streams.post("/streams", {...formValues, userId});
        dispatch({
            type: CREATE_STREAM,
            payload : formValues,
        });
        history.push('/');
    }
}

export const fetchStreams = () => {
    return async (dispatch) => {
        const response = await streams.get("/streams");
        dispatch({
            type : FETCH_STREAMS,
            payload : response.data,
        });
    }
}

export const fetchStream = (id) => {
    return async (dispatch) => {
        const response = await streams.get(`/streams/${id}`);
        dispatch({
            type : FETCH_STREAM,
            payload : response.data,
        });
    }
}

export const updateStream = (id, formValues) => {
    return async (dispatch) => {
        const response = await streams.patch(`/streams/${id}`, formValues);
        dispatch({
            type : UPDATE_STREAM,
            payload : response.data,
        });
        history.push('/');
    }
}

export const deleteStream = (id) => {
    return async (dispatch) => {
        await streams.delete(`/streams/${id}`);
        dispatch({
            type : DETETE_STREAM,
            payload : id,
        });
    }
}