import {NewPostType} from '../redux/profile-reducer';

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

    }
};