import {useSelector} from 'react-redux';
import {Input, Textarea} from '../../common/FormsControls/FormsControl';
import s from '../../common/FormsControls/FormsControl.module.css';
import {Field, reduxForm} from 'redux-form';
import {AppStateType} from '../../../redux/redux-store';
import {UserProfilePage} from '../../../redux/profileReduser';

export const createField = (type: string, placeholder: string, name: string, component: React.FC, validate: any) => {
    return <div>
        <Field
            type={type}
            placeholder={placeholder}
            name={name}
            component={component}
            validate={validate}/>
    </div>
}

function ProfileDataForm(props: any) {
    const profile = useSelector<AppStateType, UserProfilePage>(state => state.profilePage.profile)

    return (
        <form onSubmit={props.handleSubmit}>
            {props.error && <div className={s.formSummaryError}>{props.error}</div>}
            <div style={{listStyleType: 'none', paddingLeft: '0px', marginLeft: '0px'}}>
                <div><b>Full name:</b>
                    {createField('textarea', 'Full  name', 'fullName', Input, [])} </div>
                <div><b>About Me: </b>{profile.aboutMe}
                    {createField('textarea', 'About Me', 'aboutMe', Textarea, [])}
                </div>
                <div><b>Looking for a job:</b> {profile.lookingForAJob ? 'Yes' : 'No'}
                    {createField('checkbox', '', 'lookingForAJob', Input, [])}</div>
            </div>
            <div>
                <b>My professional skills</b> : {profile.lookingForAJobDescription}
                {createField('textarea', 'My professional skills', 'lookingForAJobDescription', Textarea, [])}
            </div>

            <div>

                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div className="contact">
                    <b>{key}: {createField(key, 'textarea', 'contacts.' + key, Input, [])} </b>
                </div>
            })}
            </div>
            <div>
                <button>Save</button>
            </div>
        </form>
    )
}

export const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)