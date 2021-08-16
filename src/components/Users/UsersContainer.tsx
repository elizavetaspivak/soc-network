import {connect, useDispatch} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
    follow, followUsersThunkCreator,
    getUsersThunkCreator,
    setCurrentPage,
    toggleIsFollowingProgress,
    unfollow, unfollowUsersThunkCreator,
    UserType
} from '../../redux/usersReduser';
import React, {useEffect} from 'react';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from '../../redux/usersSelectors';

type mapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

type UsersAPIComponentPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    isFetching: boolean
    followingInProgress: number[]
    toggleIsFollowingProgress: (isFollowing: boolean, userId: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    unfollowUsersThunkCreator: (userId: number) => void
    followUsersThunkCreator: (userId: number) => void
}

export function UsersComponent (props: UsersAPIComponentPropsType) {
    useEffect(() => {
        props.getUsersThunkCreator(props.currentPage, props.pageSize)
    }, [])


    const onPageChanged = (pageNumber: number) => {
        props.getUsersThunkCreator(pageNumber, props.pageSize)
    }

        return <>
            {props.isFetching ? <Preloader/> : null}
            <Users users={props.users} pageSize={props.pageSize} follow={props.follow}
                   unfollow={props.unfollow} currentPage={props.currentPage}
                   totalUsersCount={props.totalUsersCount} onPageChanged={onPageChanged}
                   followingInProgress={props.followingInProgress}
                   toggleIsFollowingProgress={props.toggleIsFollowingProgress}
                   unfollowUsersThunkCreator={props.unfollowUsersThunkCreator}
                   followUsersThunkCreator={props.followUsersThunkCreator}/>
        </>
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage, toggleIsFollowingProgress, getUsersThunkCreator, unfollowUsersThunkCreator,
        followUsersThunkCreator
    })
)(UsersComponent)