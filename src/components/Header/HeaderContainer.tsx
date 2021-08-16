import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {logoutThunkCreator, SetAuthUserDataAC} from '../../redux/authReduser';
import {getIsAuth, getLogin} from '../../redux/headerSelectors';

type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type HeaderContainerType = {
    isAuth: boolean
    login: string | null
    SetAuthUserDataAC: any
    logoutThunkCreator: any
}

export function HeaderAPIContainer(props: HeaderContainerType) {
        return <Header {...props} isAuth={props.isAuth} login={props.login} logout={props.logoutThunkCreator}/>

}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: getIsAuth(state),
        login: getLogin(state)
    }
}

export const HeaderContainer = connect(mapStateToProps, {
    SetAuthUserDataAC, logoutThunkCreator
})(HeaderAPIContainer)

