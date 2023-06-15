import axios from 'axios';
import {ProfileAPIType} from '../redux/profile-reducer';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': 'd09df4a6-624c-4f2c-a2ad-d9a381941271'},
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 18, term = '', friend: boolean | null) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}&term=${term}&friend=${friend}`).then(response => response.data);
    },
    follow(userID: number) {
        return instance.post(`follow/${userID}`, {});
    },
    unfollow(userID: number) {
        return instance.delete(`follow/${userID}`);
    },
};

export const profileAPI = {
    getProfile(userID: number) {
        return instance.get(`profile/${userID}`);
    },
    getStatus(userID: number) {
        return instance.get(`profile/status/${userID}`);
    },
    getIsFollows(userID: number) {
        return instance.get(`follow/${userID}`);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status});
    },
    savePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },
    saveProfile(profile: ProfileAPIType) {
        return instance.put(`profile`, profile);
    },
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email: string, password: string, rememberMe = false, captcha: string | null = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout() {
        return instance.delete(`auth/login`);
    },
};

export const dialogsAPI = {
    getDialogs() {
        return instance.get(`dialogs`).then(response => response.data);
    },
    getMessages(userID: number, page = 1, pageSize = 10) {
        return instance.get(`dialogs/${userID}/messages?page=${page}&count=${pageSize}`).then(response => response.data);
    },
    sendMessage(userID: number, body: string) {
        return instance.post(`dialogs/${userID}/messages`, {body}).then(response => response.data);
    },
    deleteMessage(messageID: string) {
        return instance.delete(`dialogs/messages/${messageID}`).then(response => response.data);
    },
};

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    },
};