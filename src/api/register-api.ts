import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/',
    withCredentials: true,
});

export const registerAPI = {
    register(login: string, email: string, password: string, acceptOffer: boolean) {
        return instance.post<RegisterResponseType>('Auth/Auth/TryRegister', {
            'JoinModel.Name': login,
            'JoinModel.Email': email,
            'JoinModel.Password': password,
            'JoinModel.AcceptOffer': acceptOffer,
        }).then(res => res.data);
    },
};

type RegisterResponseType = {
    Extra: {
        email: string;
        password: string;
    }
}