import {loginAPI, ResultCodes, securityAPI} from '../api/api';
import {stopSubmit} from 'redux-form';
import {ThunkDispatch} from "redux-thunk";
import {Dispatch} from "redux";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'
const SET_CAPTCHA = 'samurai-network/auth/SET_CAPTCHA'

type AuthStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captcha?: string | null | undefined
}

type ActionType = ReturnType<typeof SetAuthUserDataAC> | ReturnType<typeof SetCaptchaAC>

let initialState: AuthStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null
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
                captcha: action.captchaURl
            }
        default:
            return state
    }
}

export const SetAuthUserDataAC = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
} as const)

export const SetCaptchaAC = (captchaURl: string) => ({type: SET_CAPTCHA, captchaURl} as const)

export const authThunkCreator = () => async (dispatch: Dispatch<ReturnType<typeof SetAuthUserDataAC>>) => {
    let meData = await loginAPI.me()
    if (meData.resultCode === ResultCodes.Success) {
        let {id, login, email} = meData.data
        dispatch(SetAuthUserDataAC(id, email, login, true))
    }
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean, captcha: string | null | undefined) => async (dispatch: ThunkDispatch<ReturnType<typeof authThunkCreator>, ReturnType<typeof getCaptchaThunkCreator>, ReturnType<typeof stopSubmit>>) => {
    let response = await loginAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === ResultCodes.Success) {
        dispatch(authThunkCreator())
    } else {
        if (response.data.resultCode === ResultCodes.CaptchaIsRequired) {
            dispatch(getCaptchaThunkCreator())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some Error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const getCaptchaThunkCreator = () => async (dispatch: Dispatch<ReturnType<typeof SetCaptchaAC>>) => {
    let response = await securityAPI.getCaptcha()
    const captchaURl = response.data.url
    dispatch(SetCaptchaAC(captchaURl))
}

export const logoutThunkCreator = () => async (dispatch: Dispatch<ReturnType<typeof SetAuthUserDataAC>>) => {
    let response = await loginAPI.logout()
    if (response.data.resultCode === ResultCodes.Success) {
        dispatch(SetAuthUserDataAC(null, null, null, false))
    }
}