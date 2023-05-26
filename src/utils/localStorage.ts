import {NewPostType, PostDataType} from '../redux/profile-reducer';

export const savePosts = (userID: number, newPost: NewPostType) => {
    try {
        const serializedPosts = localStorage.getItem('posts');
        if (serializedPosts) {
            const savedPosts = JSON.parse(serializedPosts);
            savedPosts[userID] = [newPost, ...savedPosts[userID]];
            localStorage.setItem('posts', JSON.stringify(savedPosts));
        } else {
            localStorage.setItem('posts', JSON.stringify({[userID]: [newPost]}));
        }
    } catch {
        return undefined;
    }
};

export const updateSavedPosts = (userID: number, updatedPostsData: PostDataType[]) => {
    try {
        const serializedPosts = localStorage.getItem('posts');
        if (serializedPosts) {
            const savedPosts = JSON.parse(serializedPosts);
            savedPosts[userID] = updatedPostsData;
            localStorage.setItem('posts', JSON.stringify(savedPosts));
        }
    } catch {
        return undefined;
    }
};

export const loadPosts = (userID: number) => {
    try {
        const serializedPosts = localStorage.getItem('posts');
        if (serializedPosts) {
            return JSON.parse(serializedPosts)[userID];
        }
        return undefined;
    } catch (err) {
        return undefined;
    }
};