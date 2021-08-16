import React from 'react'
import {
    FollowAT,
    SetCurrentPageAT,
    SetTotalCountAT,
    SetUsersAT,
    ToggleIsFetchingAT, ToggleIsFollowingProgressAT,
    UnfollowAT
} from './usersReduser';
import {PostType} from './redux-store';
import {profileAPI, UpdateProfileType} from '../api/api';
import {NewMessageActionType} from './dialogsReduser';
import {Dispatch} from 'redux';
import {stopSubmit} from 'redux-form';

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
    profile: null,
    status: ''
}

export type ProfilePageType = {
    posts: Array<PostType>
    profile: UserProfilePage | null
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

export type AddPostActionType = {
    type: 'ADD-POST'
    newPostBody: string
}

export type DeletePostActionType = {
    type: 'DELETE-POST'
    postId: number
}

export type setUserProfileAT = {
    type: 'SET_USER_PROFILE'
    profile: any
}

export type setNewStatusAT = {
    type: 'SET_NEW_STATUS'
    newStatus: string
}

export type setNewPhotoAT = {
    type: 'SET_NEW_PHOTO'
    photos: PhotosType
}

type PhotosType = {
    small: string
    large: string
}

export type ActionType =
    AddPostActionType
    | NewMessageActionType
    | FollowAT
    | UnfollowAT
    | SetUsersAT
    | SetCurrentPageAT
    | SetTotalCountAT
    | ToggleIsFetchingAT
    | setUserProfileAT
    | ToggleIsFollowingProgressAT
    | setNewStatusAT
    | DeletePostActionType
    | setNewPhotoAT

export const profileReduser = (state: ProfilePageType = initialState, action: ActionType) => {
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


export const addPostActionCreator = (newPostBody: string): AddPostActionType => ({type: ADD_POST, newPostBody})
export const deletePostActionCreator = (postId: number): DeletePostActionType => ({type: DELETE_POST, postId})

export const setUserProfile = (profile: any): setUserProfileAT => ({
    type: SET_USER_PROFILE, profile
})

export const changeStatusAC = (newStatus: string): setNewStatusAT => ({
    type: SET_NEW_STATUS, newStatus
})

export const updatePhotoAC = (photos: PhotosType): setNewPhotoAT => ({
    type: SET_NEW_PHOTO, photos
})


export const getMeProfileThunkCreator = (userId: number) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getMeProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getMeStatusThunkCreator = (userId: number) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getMeStatus(userId)
    dispatch(changeStatusAC(response.data))
}

export const updateStatusThunkCreator = (status: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(changeStatusAC(status))
    }
}

export const savePhoto = (file: File) => async (dispatch: Dispatch) => {
    let response = await profileAPI.createPhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(updatePhotoAC(response.data.data.photos))
    }
}

export const saveProfile = (updatedProfile: UpdateProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId

    let response = await profileAPI.updateProfile(updatedProfile)

    if (response.data.resultCode === 0) {
        dispatch(getMeProfileThunkCreator(userId))
    }else {
        dispatch(stopSubmit('login', {_error: response.data.messages[0]}))
    }
}