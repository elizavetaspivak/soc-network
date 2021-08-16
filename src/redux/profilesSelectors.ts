import {AppStateType} from './redux-store';

export const getMeProfile = (state: AppStateType) => {
    return state.profilePage.profile
}

export const getMeStatus = (state: AppStateType) => {
    return state.profilePage.status
}

export const getMeAutorizedUserID = (state: AppStateType) => {
    return state.auth.userId
}

export const getMePosts = (state: AppStateType) => {
    return state.profilePage.posts
}
