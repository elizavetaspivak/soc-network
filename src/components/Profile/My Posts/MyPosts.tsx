import React from 'react'
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostType} from '../../../redux/redux-store';
import {MyPostsFormRedux, MyPostsFormType} from './MyPostsForm.';
import {UserProfilePage} from '../../../redux/profileReduser';


type MyPostsType = {
    addPostActionCreator: (newPostBody: string) => void
    posts: Array<PostType>
    profile: UserProfilePage
}

export const MyPosts = React.memo(function (props: MyPostsType) {
    const postsElements = props.posts.map(p => <Post profile={props.profile} message={p.message} likesCount={p.likesCount} key={p.id} id={p.id}/>)

    const onSubmit = (formData: MyPostsFormType) => {
        props.addPostActionCreator(formData.newPostBody)
    }

    return (
        <div className={s.posts_block}>
            <h3>My posts</h3>
            <MyPostsFormRedux onSubmit={onSubmit}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})


