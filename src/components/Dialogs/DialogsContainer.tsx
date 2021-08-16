import React from 'react'
import {addNewMessageActionCreator} from '../../redux/dialogsReduser';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType, DialogPageType} from '../../redux/redux-store';
import {compose, Dispatch} from 'redux';
import {withAuthRedirect} from '../../hoc/AuthRedirect';
import {getDialogsPage} from '../../redux/dialogsSelectors';


type mapStateToPropsType = {
    dialogsPage: DialogPageType
}

type mapDispatchToPropsType = {
    sendMessage: (newMessage: string) => void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: getDialogsPage(state)
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: (newMessage: string) => {
            dispatch(addNewMessageActionCreator(newMessage))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)