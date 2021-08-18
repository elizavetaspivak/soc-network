import React from 'react'
import {addPostActionCreator, UserProfilePage} from '../../../redux/profileReduser';
import {MyPosts} from './MyPosts';
import {AppStateType, PostType} from '../../../redux/redux-store';
import {connect} from 'react-redux';
import {getMePosts, getMeProfile} from '../../../redux/profilesSelectors';


type mapStateToPropsType = {
    posts: Array<PostType>
    profile: UserProfilePage
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: getMePosts(state),
        profile: getMeProfile(state)
    }
}

export const MyPostsContainer = connect(mapStateToProps, {addPostActionCreator})(MyPosts);


