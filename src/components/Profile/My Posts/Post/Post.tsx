import s from './Post.module.css'
import userPhoto from '../../../../assets/images/avatar.jpg';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../../../redux/redux-store';
import {UserProfilePage} from '../../../../redux/profileReduser';

type PostPropsType = {
    message: string
    likesCount: number
    id: number
    profile: UserProfilePage
}

export function Post(props: PostPropsType) {
    return (

        <div className={s.item}>
            <img src={props.profile.photos ? props.profile.photos.small : userPhoto} alt={''}/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>

    )
}


