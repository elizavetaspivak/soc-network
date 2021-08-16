import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './ProfileStatus.module.css'

type ProfileStatusWithHooksPropsType = {
    status: string
    changeStatusAC: (newStatus: string) => void
    updateStatus: (status: string) => void
}

export function ProfileStatusWithHooks(props: ProfileStatusWithHooksPropsType) {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const ChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {editMode ?
                <div>
                    <input onBlur={deactivateEditMode} value={status} onChange={ChangeStatus} autoFocus/>
                </div>
                : <div className={s.status}>
                   Status: <span onDoubleClick={activateEditMode}>{props.status} </span>
                </div>
            }
        </div>

    )
}