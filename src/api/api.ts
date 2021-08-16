import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '440db37e-eb2c-400b-bea3-188dde83621c'
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    followUser(userId: number){
        return instance.post(`follow/${userId}`)
    },
    unfollowUser(userId: number){
        return instance.delete(`follow/${userId}`)
    }
}

export const loginAPI = {
    me(){
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean){
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    },
    getCaptcha(){
        return instance.get(`security/get-captcha-url`)
    }
}

export const profileAPI = {
    getMeProfile(userId: number){
        return instance.get(`profile/` + userId)
    },
    getMeStatus(userId: number){
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string){
        return instance.put(`profile/status/`, {status})
    },
    createPhoto(){
        return instance.put(`/profile/photo`,{image:'https://static.wikia.nocookie.net/mrrobot/images/5/5a/MRPoster.jpg/revision/latest?cb=20160625030409'})
    }
}


