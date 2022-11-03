import {ActionsTypes} from "./redux-store";

export type PostsDataType = {
    id: number;
    message: string;
    likes: number;
}
export type ProfilePageType = {
    postsData: Array<PostsDataType>;
    newPostText: string;
}
//type ProfileReducerType = (state: ProfilePageType, action: ActionsTypes) => ProfilePageType;

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState: ProfilePageType = {
    postsData: [
        {id: 1, message: 'I\'m glad to see you here', likes: 5},
        {id: 2, message: 'Hello! How are you?', likes: 4},
        {id: 3, message: 'It\'s my firs post', likes: 3},
    ],
    newPostText: 'Hello',
};

const profileReducer = (state = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 4,
                message: state.newPostText,
                likes: 0,
            };
            return {...state, postsData: [...state.postsData, newPost], newPostText: ''};

        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText};

        default:
            return state;
    }
};

export type AddPostActionType = {
    type: 'ADD-POST';
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT';
    newText: string;
}

export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;