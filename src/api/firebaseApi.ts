import {initializeApp} from 'firebase/app';
import {child, get, getDatabase, ref, remove, set} from 'firebase/database';
import {PostDataType} from '../redux/profile-reducer';
import axios from 'axios';

const firebaseConfig = {
    apiKey: 'AIzaSyAiJY-qHhH7qhJM68K03AVA8QYOfrh8zAM',
    authDomain: 'connectify-c0124.firebaseapp.com',
    databaseURL: 'https://connectify-c0124-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'connectify-c0124',
    storageBucket: 'connectify-c0124.appspot.com',
    messagingSenderId: '574666849016',
    appId: '1:574666849016:web:3872f50d0b63a824b1590d',
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

const config = axios.create({
    baseURL: 'https://connectify-c0124-default-rtdb.europe-west1.firebasedatabase.app/',
    headers: {
        apiKey: 'AIzaSyAiJY-qHhH7qhJM68K03AVA8QYOfrh8zAM',
        authDomain: 'connectify-c0124.firebaseapp.com',
        databaseURL: 'https://connectify-c0124-default-rtdb.europe-west1.firebasedatabase.app',
        projectId: 'connectify-c0124',
        storageBucket: 'connectify-c0124.appspot.com',
        messagingSenderId: '574666849016',
        appId: '1:574666849016:web:3872f50d0b63a824b1590d',
    },
});

export const postsAPI = {
    getPosts(userID: number) {
        // return get(child(ref(database), `posts/${userID}`)).then((snapshot) => {
        //     if (snapshot.exists()) {
        //         return snapshot.val();
        //     }
        // });
        return config.get(`posts/${userID}.json`).then(response => response.data);
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