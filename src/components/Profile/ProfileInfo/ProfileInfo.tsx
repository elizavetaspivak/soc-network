import s from './ProfileInfo.module.css'
import {UserProfilePage} from '../../../redux/profileReduser';
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/avatar.jpg'
import {ChangeEvent, useState} from 'react';
import {ProfileDataFormReduxForm} from './ProfileDataForm';
import {UpdateProfileType} from '../../../api/api';

type ProfileInfoPropsType = {
    profile: UserProfilePage | null
    status: string
    changeStatusAC: (newStatus: string) => void
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: any
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    const [editMode, setEditMode] = useState(false)

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: any) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false)
        })
    }

    const goToEditMode = () => {
        setEditMode(true)
    }

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.description_block}>
                <div className={s.profilePhoto}>
                    <img src={ props.profile.photos ? props.profile.photos.large : userPhoto} alt={''}/>
                    <div className={s.updatePhoto}>
                        {props.isOwner ? <input type={'file'} onChange={(e) => onMainPhotoSelected(e)}/> : ''}
                    </div>
                </div>
                {editMode ?
                    <ProfileDataFormReduxForm initialValues={props.profile} onSubmit={onSubmit}/> :
                    <ProfileData goToEditMode={goToEditMode} isOwner={props.isOwner} profile={props.profile}
                                 status={props.status}
                                 updateStatus={props.updateStatus}
                                 changeStatusAC={props.changeStatusAC}/>}
            </div>
        </div>
    )
}

type ProfileDataProps = {
    profile: UserProfilePage
    status: string
    changeStatusAC: (newStatus: string) => void
    updateStatus: (status: string) => void
    isOwner: boolean
    goToEditMode: () => void
}

function ProfileData(props: ProfileDataProps) {
    return (
        <div>
            <h1>Name: {props.profile.fullName}</h1>
            <ProfileStatusWithHooks status={props.status} changeStatusAC={props.changeStatusAC}
                                    updateStatus={props.updateStatus}/>
            <p>About Me: {props.profile.aboutMe}</p>
            <p>Looking for a job: {props.profile.lookingForAJob ? 'Yes ' : 'No '}</p>
            {props.profile.lookingForAJob &&
            <div>
                My professional skills: {props.profile.lookingForAJobDescription}
            </div>}
            <div>
                Contacts: {props.profile.contacts && Object.entries(props.profile.contacts).map(value => {
                return value[1] && <div><a href={value[1]}>{value[0]}</a></div>
            })}
            </div>
            {props.isOwner ? <div>
                <button onClick={props.goToEditMode}>EDIT</button>
            </div> : ''}
        </div>
    )
}

