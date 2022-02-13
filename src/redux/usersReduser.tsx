import React from 'react'
import {ActionType} from './profileReduser';
import {usersAPI} from '../api/api';
import {updateObjectInArray} from '../utils/validators/object-helpers';
import {Action, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

type usersLocation = {
    city: string
    country: string
}
export type UserType = {
    id: number,
    photos: PhotosType
    followed: boolean,
    name: string,
    status: string
}
type PhotosType = {
    small: string | null
    large: string | null
}
export type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

let initialState: UsersPageType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const usersReduser = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFollowing
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id != action.userID)
            }
        default:
            return state;
    }
}

export const follow = (userId: number) => ({type: FOLLOW, userId} as const)

export const unfollow = (userId: number) => ({type: UNFOLLOW, userId} as const)

export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users} as const)

export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)

export const setTotalCount = (totalCount: number) => ({type: SET_TOTAL_COUNT, totalCount} as const)

export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)

export const toggleIsFollowingProgress = (isFollowing: boolean, userID: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, isFollowing, userID
} as const)

export const getUsersThunkCreator = (currentPage: number, pageSize: number): ThunkAction<Promise<void>, AppStateType, any, ActionType> => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))

    let response = await usersAPI.getUsers(currentPage, pageSize)

    dispatch(setUsers(response.data.items))
    dispatch(setTotalCount(response.data.totalCount))
    dispatch(toggleIsFetching(false))
}


const followUnfolowFlow = async (dispatch: Dispatch<ActionType>, userId: number, apiMethod: any, actionCreator: (userId: number) => ReturnType<typeof unfollow> | ReturnType<typeof follow>) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}

export const unfollowUsersThunkCreator = (userId: number) => async (dispatch: Dispatch) => {
    await followUnfolowFlow(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), unfollow)
}

export const followUsersThunkCreator = (userId: number) => async (dispatch: Dispatch) => {
    await followUnfolowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), follow)
}