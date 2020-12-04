import {
    CREATE_POST,
    DELETE_POST,
    FILTER_POST, HANDLE_ADD_FORM,
    SEARCH_POST,
    TOGGLE_IMPORTANT,
    TOGGLE_LIKE
} from "../constants/constants";


export function deletePost(id) {
    return {
        type: DELETE_POST,
        payload: id
    }
}

export function addPost(postValue) {
    return {
        type: CREATE_POST,
        payload: postValue
    }
}

export function onToggleImportant(id) {
    return {
        type: TOGGLE_IMPORTANT,
        payload: id
    }
}

export function onToggleLike(id) {
    return {
        type: TOGGLE_LIKE,
        payload: id
    }
}
export function searchPost(term,filter) {
    return {
        type: SEARCH_POST,
        payload: {term,filter}
    }
}

export function filterPost(filter,data) {
    return {
        type: FILTER_POST,
        payload: {
            data: data,
            filter:filter
        }
    }
}
export function handleAddForm(data) {
    return {
        type: HANDLE_ADD_FORM,
        payload: data
    }
}


