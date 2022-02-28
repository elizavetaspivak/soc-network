import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../components/common/FormsControls/FormsControl';
import {requiredField} from '../utils/validators/validators';
import s from '../components/common/FormsControls/FormsControl.module.css'
import {useSelector} from 'react-redux';
import {AppStateType} from '../redux/redux-store';

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
    captcha: string | null | undefined
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    const captcha = useSelector<AppStateType, string | null | undefined>(state => state.auth.captcha)

    return <form onSubmit={handleSubmit}>
        <div>
            <Field placeholder={'Login'} name={'login'} component={Input} validate={[requiredField]}/>
        </div>
        <div>
            <Field type={'password'} placeholder={'Password'} name={'password'} component={Input}
                   validate={[requiredField]}/>
        </div>
        <div>
            <Field type={'checkbox'} name={'rememberMe'} component={Input}/> remember me
        </div>
        {captcha && <img src={captcha} alt=""/>}
        {captcha &&
        <Field placeholder={'Anti-bot symbols'} name={'captcha'} component={Input} validate={[requiredField]}/>}
        {error ? <div className={s.formSummaryError}>{error}</div> : ''}
        <div>
            <button>Login</button>
        </div>
    </form>
}

export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)