import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': 'd09df4a6-624c-4f2c-a2ad-d9a381941271'},
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 15) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
            {withCredentials: true})
            .then(response => response.data);
    }
}