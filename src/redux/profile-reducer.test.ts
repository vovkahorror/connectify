import profileReducer, {addPostToState, setPosts, ProfilePageType, ProfileAPIType} from './profile-reducer';
import {v1} from 'uuid';

const state: ProfilePageType = {
    postsData: [
        {
            id: '1',
            message: 'I\'m glad to see you here',
            date: JSON.stringify(new Date()),
            senderUserID: 1,
            likes: [],
            dislikes: [],
        },
        {
            id: '2',
            message: 'Hello! How are you?',
            date: JSON.stringify(new Date()),
            senderUserID: 1,
            likes: [],
            dislikes: [],
        },
        {
            id: '3',
            message: 'It\'s my firs post',
            date: JSON.stringify(new Date()),
            senderUserID: 1,
            likes: [],
            dislikes: [],
        },
    ],
    profile: {} as ProfileAPIType,
    status: '',
};

it('length of posts should be incremented', () => {
    // 1. test data
    const newPost = {
        id: v1(),
        message: 'hello',
        date: JSON.stringify(new Date()),
        senderUserID: 1,
        senderPhoto: '',
        likes: [],
        dislikes: [],
    };
    const action = addPostToState(newPost);

    // 2. action
    const newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.postsData.length).toBe(4);
});

it('message of new post should be correct', () => {
    // 1. test data
    const newPost = {
        id: v1(),
        message: 'hello',
        date: JSON.stringify(new Date()),
        senderUserID: 1,
        senderPhoto: '',
        likes: [],
        dislikes: [],
    };
    const action = addPostToState(newPost);

    // 2. action
    const newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.postsData[0].message).toBe('hello');
});

it('after deleting length of posts should be decrement', () => {
    // 1. test data
    const updatedPostsData = [
        {
            id: '1',
            message: 'I\'m glad to see you here',
            date: JSON.stringify(new Date()),
            senderUserID: 1,
            senderPhoto: '',
            likes: [],
            dislikes: [],
        },
        {
            id: '3',
            message: 'It\'s my firs post',
            date: JSON.stringify(new Date()),
            senderUserID: 1,
            senderPhoto: '',
            likes: [],
            dislikes: [],
        },
    ];
    const action = setPosts(updatedPostsData);

// 2. action
    const newState = profileReducer(state, action);

// 3. expectation
    expect(newState.postsData.length).toBe(2);
})
;

it('after deleting length shouldn\'t be decrement if id is incorrect', () => {
    // 1. test data
    const updatedPostsData = [
        {
            id: '1',
            message: 'I\'m glad to see you here',
            date: JSON.stringify(new Date()),
            senderUserID: 1,
            senderPhoto: '',
            likes: [],
            dislikes: [],
        },
        {
            id: '2',
            message: 'Hello! How are you?',
            date: JSON.stringify(new Date()),
            senderUserID: 1,
            senderPhoto: '',
            likes: [],
            dislikes: [],
        },
        {
            id: '3',
            message: 'It\'s my firs post',
            date: JSON.stringify(new Date()),
            senderUserID: 1,
            senderPhoto: '',
            likes: [],
            dislikes: [],
        }];
    const action = setPosts(updatedPostsData);

    // 2. action
    const newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.postsData.length).toBe(3);
});
