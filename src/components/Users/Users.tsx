import {UserType} from '../../redux/usersReduser';
import s from './Users.module.css';
import React from 'react';
import {Helmet} from 'react-helmet';
import {Paginator} from '../common/Paginator/Paginator';
import {User} from './User';

type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    followingInProgress: number[]
    toggleIsFollowingProgress: (isFollowing: boolean, userId: number) => void
    unfollowUsersThunkCreator: (userId: number) => void
    followUsersThunkCreator: (userId: number) => void
}

export const Users: React.FC<UsersPropsType> = ({
                                                    users,
                                                    pageSize,
                                                    totalUsersCount,
                                                    currentPage,
                                                    onPageChanged,
                                                    followingInProgress,
                                                    unfollowUsersThunkCreator,
                                                    followUsersThunkCreator
                                                }) => {

    return (
        <div className={s.allUser}>
            <Helmet>
                <title>Users</title>
                <meta name="description" content="Users application"/>
            </Helmet>
            <div className={s.titleUsers}>Users</div>
            <Paginator pageSize={pageSize} totalUsersCount={totalUsersCount} currentPage={currentPage}
                       onPageChanged={onPageChanged} portionSize={10}/>
            <div>
                {users.map((u: UserType) => <User user={u} followingInProgress={followingInProgress}
                                                  followUsersThunkCreator={followUsersThunkCreator}
                                                  unfollowUsersThunkCreator={unfollowUsersThunkCreator}/>)}
            </div>
        </div>
    )
}