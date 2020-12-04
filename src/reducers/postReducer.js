import {v4 as uuidv4} from "uuid";
import {
    CREATE_POST,
    DELETE_POST,
    FILTER_POST, HANDLE_ADD_FORM,
    SEARCH_POST,
    TOGGLE_IMPORTANT,
    TOGGLE_LIKE
} from "../constants/constants";

const initialState = {
    posts: [
        {id: uuidv4(), label: 'label 1', important: false, like: true},
        {id: uuidv4(), label: 'label 2', important: true, like: false},
        {id: uuidv4(), label: 'label 3', important: true, like: true}
    ],
    term: '',
    filter: 'all',
    filtered:[],
    isChanged:false,
    postValue:''
}


const postReducer = (state = initialState, action) => {
    const {posts} = state
    switch (action.type) {
        case DELETE_POST:
            let copy = posts.filter(post => post.id !== action.payload);
            return {...state, posts: [...copy]}
        case CREATE_POST:
            let newPost = {id: uuidv4(), label: action.payload, important: false, like: false};
            return {...state,postValue:'', posts: [...posts, newPost]};

        case TOGGLE_IMPORTANT:
            let newArr = posts.map(post => post.id === action.payload ? {...post, important: !post.important} : post);
            return {...state,posts: [...newArr]};

        case TOGGLE_LIKE:
            let copyState = posts.map(post => post.id === action.payload ? {...post, like: !post.like} : post);
            return {...state,posts: [...copyState]};

        case SEARCH_POST:
                const searchResult = posts.filter((val) => val.label.includes(action.payload.term));
                return {...state,isChanged:true ,filter:action.payload.filter,term:action.payload.term,filtered: searchResult};
        case FILTER_POST:
            if(action.payload.filter === 'all'){
                return {...state,filter:action.payload.filter,term:'',isChanged: false}
            }else {
                return {...state,isChanged:true,filter:action.payload.filter,term:'', filtered: [...posts.filter(item => item.like)]};
            }
        case HANDLE_ADD_FORM:
            return {...state,postValue:action.payload}
        default:
            return state;
    }
}
export default postReducer;

