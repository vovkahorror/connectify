import profileReducer, {addPostAC, deletePostAC, ProfilePageType} from './profile-reducer';

const state: ProfilePageType = {
    postsData: [
        {id: '1', message: 'I\'m glad to see you here', likes: 5},
        {id: '2', message: 'Hello! How are you?', likes: 4},
        {id: '3', message: 'It\'s my firs post', likes: 3},
    ],
    profile: null,
    status: '',
};

it('length of posts should be incremented', () => {
    // 1. test data
    const action = addPostAC('hello');

    // 2. action
    const newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.postsData.length).toBe(4);
});

it('message of new post should be correct', () => {
    // 1. test data
    const action = addPostAC('hello');

    // 2. action
    const newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.postsData[3].message).toBe('hello');
});

it('after deleting length of posts should be decrement', () => {
    // 1. test data
    const action = deletePostAC('1');

    // 2. action
    const newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.postsData.length).toBe(2);
});

it('after deleting length shouldn\'t be decrement if id is incorrect', () => {
    // 1. test data
    const action = deletePostAC('100');

    // 2. action
    const newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.postsData.length).toBe(3);
});
