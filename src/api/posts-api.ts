import {initializeApp} from 'firebase/app';
import {child, get, getDatabase, ref, remove, set} from 'firebase/database';
import {PostDataType} from '../redux/profile-reducer';
import {firebaseConfig} from '../config/firebase/firebase';

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export const postsAPI = {
    getPosts(userID: number) {
        return get(child(ref(database), `posts/${userID}`)).then((snapshot) => {
            if (snapshot.exists()) {
                return snapshot.val();
            }
        });
    },
    addPost(userID: number, newPost: PostDataType) {
        return set(ref(database, `posts/${userID}/${newPost.id}`), newPost);
    },
    updatePost(userID: number, post: PostDataType) {
        return set(ref(database, `posts/${userID}/${post.id}`), post);
    },
    deletePost(userID: number, postID: string) {
        return remove(ref(database, `posts/${userID}/${postID}`));
    },
};