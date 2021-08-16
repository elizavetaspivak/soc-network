import {loginAPI} from '../api/api';
import {stopSubmit} from 'redux-form';


const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'
const SET_CAPTCHA = 'samurai-network/auth/SET_CAPTCHA'

type SetUserDataAT = {
    type: 'samurai-network/auth/SET_USER_DATA'
    data: AuthStateType
}

type SetCaptchaAT = {
    type: 'samurai-network/auth/SET_CAPTCHA'
    captch: string
}

type AuthStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captcha?: string
}

type ActionType = SetUserDataAT | SetCaptchaAT

let initialState: AuthStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: undefined
}

export const authReducer = (state: AuthStateType = initialState, action: ActionType): AuthStateType => {
    const stateCopy = {...state}

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...stateCopy,
                ...action.data
            }
        case SET_CAPTCHA:
            return {
                ...stateCopy,
                captcha: action.captch
            }
        default:
            return state
    }
}

export const SetAuthUserDataAC = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataAT => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
})

export const SetCaptchsAC = (captch: string): SetCaptchaAT => ({type: SET_CAPTCHA, captch})

export const authThunkCreator = () => async (dispatch: any) => {
    let response = await loginAPI.me()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(SetAuthUserDataAC(id, email, login, true))
    }
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
    let response = await loginAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(authThunkCreator())
    } else if (response.data.resultCode === 10) {
        dispatch(setCaptchaThunkCreator())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some Error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const setCaptchaThunkCreator = () => async (dispatch: any) => {
    let response = await loginAPI.getCaptcha()
    if (response.data.resultCode === 0) {
        dispatch(SetCaptchsAC(response.data.url))
    }
}

export const logoutThunkCreator = () => async (dispatch: any) => {
    let response = await loginAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(SetAuthUserDataAC(null, null, null, false))
    }
}