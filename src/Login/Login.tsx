import React from 'react';
import {FormDataType, LoginReduxForm} from './LoginForm';
import {connect} from 'react-redux';
import {loginThunkCreator} from '../redux/authReduser';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../redux/redux-store';

type mapStateToPropsType = {
    isAuth: boolean
    captchaURL: string | null | undefined
}

type MapDispatchToPropsType = {
    loginThunkCreator: (email: string, password: string, rememberMe: boolean, captcha: string | null | undefined) => void
}

type LoginPropsType = mapStateToPropsType & MapDispatchToPropsType

const Login: React.FC<LoginPropsType> = ({loginThunkCreator, isAuth }) => {
    const onSubmit = (formData: FormDataType) => {
        loginThunkCreator(formData.login, formData.password, formData.rememberMe, formData.captcha)
    }
debugger
    if (isAuth){
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    captchaURL: state.auth.captcha,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginThunkCreator})(Login)