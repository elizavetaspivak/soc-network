import React, {useEffect} from 'react';
import {Helmet} from 'react-helmet';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
    changeStatusAC,
    getMeProfileThunkCreator,
    getMeStatusThunkCreator, savePhoto, saveProfile,
    setUserProfile, updateStatusThunkCreator,
    UserProfilePage
} from '../../redux/profileReduser';
import {withRouter} from 'react-router-dom';
import {RouteComponentProps} from 'react-router'
import {withAuthRedirect} from '../../hoc/AuthRedirect';
import {compose} from 'redux';
import {getMeAutorizedUserID, getMeProfile, getMeStatus} from '../../redux/profilesSelectors';
import {getIsAuth} from '../../redux/headerSelectors';
import {UpdateProfileType} from '../../api/api';

type PathParamsType = {
    userId: string | undefined
}
type MapStateToPropsType = {
    profile: UserProfilePage | null
    status: string
    autorizedUserID: any
    isAuth: boolean
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: UserProfilePage) => void
    changeStatusAC: (newStatus: string) => void
    getMeStatusThunkCreator: (userId: number) => void
    updateStatusThunkCreator: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (formData: UpdateProfileType) => void
}
type thunkPropsType = {
    getMeProfileThunkCreator: (userId: number) => void
}
type ProfileAPIContainerPropsType = MapStateToPropsType & MapDispatchToPropsType & thunkPropsType


type PropsType = RouteComponentProps<PathParamsType> & ProfileAPIContainerPropsType


function ProfileContainer (props: PropsType){
    useEffect(() => {
        let userId = Number(props.match.params.userId)
        if (!userId) {
            userId = props.autorizedUserID
            if(!userId){
                props.history.push('/login')
            }
        }
        props.getMeProfileThunkCreator(userId)
        props.getMeStatusThunkCreator(userId)
    },[props.match.params.userId, props.autorizedUserID, props])

        return (
            <div>
                <Helmet>
                    <title>Profile</title>
                    <meta name="description" content="Profile application"/>
                </Helmet>
                <Profile {...props} saveProfile={props.saveProfile} savePhoto={props.savePhoto} isOwner={!props.match.params.userId} profile={props.profile} status={props.status}
                         changeStatusAC={props.changeStatusAC} updateStatus={props.updateStatusThunkCreator}/>
            </div>
        )
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: getMeProfile(state),
    status: getMeStatus(state),
    autorizedUserID: getMeAutorizedUserID(state),
    isAuth: getIsAuth(state)
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        setUserProfile, getMeProfileThunkCreator, changeStatusAC,
        getMeStatusThunkCreator, updateStatusThunkCreator, savePhoto, saveProfile
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


