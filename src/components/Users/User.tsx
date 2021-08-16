import {UserType} from '../../redux/usersReduser';
import s from './Users.module.css';
import userPhoto from '../../assets/images/avatar.jpg'
import React from 'react';
import {NavLink} from 'react-router-dom';

type UserPropsType = {
    user: UserType
    followingInProgress: number[]
    unfollowUsersThunkCreator: (userId: number) => void
    followUsersThunkCreator: (userId: number) => void
}

export const User: React.FC<UserPropsType> = ({
                                                  user,
                                                  followingInProgress,
                                                  unfollowUsersThunkCreator,
                                                  followUsersThunkCreator
                                              }) => {
    return (
        <div className={s.allUser}>
            <div className={s.image}>
                <NavLink to={'/profile/' + user.id}>
                    <img
                        src={user.photos.small != null ? user.photos.small : userPhoto}
                        alt=""/>
                </NavLink>
                {
                    user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollowUsersThunkCreator(user.id)
                        }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            followUsersThunkCreator(user.id)
                        }}>Follow</button>
                }
            </div>
            <div className={s.main}>
                <div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div className={s.location}>
                    <div> {'u.location.city'},</div>
                    <div>{'u.location.country'}</div>
                </div>
            </div>
        </div>
    )
}