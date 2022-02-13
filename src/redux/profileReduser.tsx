import React from 'react'
import {
    follow, setCurrentPage, setTotalCount, setUsers, toggleIsFetching, toggleIsFollowingProgress, unfollow
} from './usersReduser';
import {AppStateType, PostType} from './redux-store';
import {profileAPI, UpdateProfileType} from '../api/api';
import {addNewMessageActionCreator} from './dialogsReduser';
import {Dispatch} from 'redux';
import {stopSubmit} from 'redux-form';
import {ThunkDispatch} from "redux-thunk";

export const ADD_POST = 'ADD-POST'
export const DELETE_POST = 'DELETE-POST'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'
export const SET_NEW_STATUS = 'SET_NEW_STATUS'
export const SET_NEW_PHOTO = 'SET_NEW_PHOTO'

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 5},
        {id: 2, message: 'It\'s my first post', likesCount: 23}
    ],
    profile: {} as UserProfilePage,
    status: ''
}

export type ProfilePageType = {
    posts: Array<PostType>
    profile: UserProfilePage
    status: string
}

export type UserProfilePage = {
    aboutMe: string
    contacts: Contacts
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number
    photos: Photos
}

type Contacts = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}

type Photos = {
    small: string | undefined
    large: string | undefined
}

type PhotosType = {
    small: string
    large: string
}

export type ActionType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof addNewMessageActionCreator>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof deletePostActionCreator>
    | ReturnType<typeof toggleIsFollowingProgress>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof changeStatusAC>
    | ReturnType<typeof updatePhotoAC>

export const profileReduser = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 3, message: action.newPostBody, likesCount: 0}]
            }
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_NEW_STATUS:
            return {
                ...state,
                status: action.newStatus
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        case SET_NEW_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state;
    }
}


export const addPostActionCreator = (newPostBody: string) => ({type: ADD_POST, newPostBody} as const)
export const deletePostActionCreator = (postId: number) => ({type: DELETE_POST, postId} as const)

export const setUserProfile = (profile: any) => ({
    type: SET_USER_PROFILE, profile
} as const)

export const changeStatusAC = (newStatus: string) => ({
    type: SET_NEW_STATUS, newStatus
} as const)

export const updatePhotoAC = (photos: PhotosType) => ({
    type: SET_NEW_PHOTO, photos
} as const)


export const getMeProfileThunkCreator = (userId: number) => async (dispatch: Dispatch<ReturnType<typeof setUserProfile>>) => {
    let response = await profileAPI.getMeProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getMeStatusThunkCreator = (userId: number) => async (dispatch: Dispatch<ReturnType<typeof changeStatusAC>>) => {
    let response = await profileAPI.getMeStatus(userId)
    dispatch(changeStatusAC(response.data))
}

export const updateStatusThunkCreator = (status: string) => async (dispatch: Dispatch<ReturnType<typeof changeStatusAC>>) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(changeStatusAC(status))
    }
}

export const savePhoto = (file: File) => async (dispatch: Dispatch<ReturnType<typeof updatePhotoAC>>) => {
    let response = await profileAPI.createPhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(updatePhotoAC(response.data.data.photos))
    }
}

export const saveProfile = (updatedProfile: UpdateProfileType) => async (dispatch: ThunkDispatch<ReturnType<typeof getMeProfileThunkCreator>, ReturnType<typeof stopSubmit>, any>, getState: () => AppStateType) => {
    const userId = getState().auth.userId

    let response = await profileAPI.updateProfile(updatedProfile)

    if (response.data.resultCode === 0) {
        userId && dispatch(getMeProfileThunkCreator(userId))
    } else {
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}