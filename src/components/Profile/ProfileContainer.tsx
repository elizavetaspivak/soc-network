import React, {useEffect} from 'react';
import {Helmet} from 'react-helmet';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
    changeStatusAC, createPhotoThunkCreator,
    getMeProfileThunkCreator,
    getMeStatusThunkCreator,
    setUserProfile, updateStatusThunkCreator,
    UserProfilePage
} from '../../redux/profileReduser';
import {withRouter} from 'react-router-dom';
import {RouteComponentProps} from 'react-router'
import {withAuthRedirect} from '../../hoc/AuthRedirect';
import {compose} from 'redux';
import {getMeAutorizedUserID, getMeProfile, getMeStatus} from '../../redux/profilesSelectors';
import {getIsAuth} from '../../redux/headerSelectors';

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
    createPhotoThunkCreator: any
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
        props.createPhotoThunkCreator()
    },[])

        return (
            <div>
                <Helmet>
                    <title>Profile</title>
                    <meta name="description" content="Profile application"/>
                </Helmet>
                <Profile {...props} profile={props.profile} status={props.status}
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
        getMeStatusThunkCreator, updateStatusThunkCreator,createPhotoThunkCreator
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


