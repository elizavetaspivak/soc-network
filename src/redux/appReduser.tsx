import {authThunkCreator} from './authReduser';

const SET_INITIALIZED = 'SET_INITIALIZED'

type SetInitializedAT = {
    type: 'SET_INITIALIZED'
}

type AppStateType = {
    initialized: boolean
}

type ActionType = SetInitializedAT

let initialState: AppStateType = {
    initialized: false
}

export const appReducer = (state: AppStateType = initialState, action: ActionType): AppStateType => {
    const stateCopy = {...state}

    switch (action.type) {
        case 'SET_INITIALIZED':
            return {
                ...stateCopy,
                initialized: true
            }
        default:
            return state
    }
}

export const InitializedSuccessAC = () => ({type: SET_INITIALIZED})

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(authThunkCreator())

    Promise.all([promise])
        .then(() => {
            dispatch(InitializedSuccessAC())
        })
}
