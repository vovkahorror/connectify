import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': 'd09df4a6-624c-4f2c-a2ad-d9a381941271'},
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 15) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
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
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status});
    },
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email: string, password: string, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    },
};